# --------------------------------------------------
# Base
# --------------------------------------------------
FROM node:20-alpine AS base

# 1. Install system dependencies
RUN apk add --no-cache libc6-compat

# 2. Set working directory
WORKDIR /app

# --------------------------------------------------
# Dependencies
# --------------------------------------------------
FROM base AS deps

# 1. Copy package manager files
COPY package.json yarn.lock* pnpm-lock.yaml* .npmrc* ./

# 2. Install dependencies
RUN --mount=type=cache,id=yarn,sharing=locked,target=/usr/local/share/.cache/yarn \
		if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
		elif [ -f package-lock.json ]; then npm ci; \
		elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install; \
		else echo "Lockfile not found." && exit 1; \
		fi

# --------------------------------------------------
# Builder
# --------------------------------------------------
FROM base AS builder

# 1. Set working directory
WORKDIR /app

# 1.1 Accept build-time public envs for Next.js
ARG NEXT_PUBLIC_STATIC_BASE_URL
ARG NEXT_PUBLIC_API_PUBLIC_BASE_URL

# 1.2 Expose them to the build environment so Next can inline them
ENV NEXT_PUBLIC_STATIC_BASE_URL=${NEXT_PUBLIC_STATIC_BASE_URL}
ENV NEXT_PUBLIC_API_PUBLIC_BASE_URL=${NEXT_PUBLIC_API_PUBLIC_BASE_URL}

# 2. Copy deps from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/yarn.lock ./yarn.lock

# 3. Copy source code
COPY . .

# 4. Build Next.js app (standalone output)
RUN yarn build

# --------------------------------------------------
# Production runner
# --------------------------------------------------
FROM base AS runner-prod

# 1. Set working directory
WORKDIR /app

# 2. Set production env
ENV NODE_ENV=production \
		NEXT_TELEMETRY_DISABLED=1

# 2.1 Keep public vars available at runtime (not strictly required, but harmless)
ARG NEXT_PUBLIC_STATIC_BASE_URL
ARG NEXT_PUBLIC_API_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_STATIC_BASE_URL=${NEXT_PUBLIC_STATIC_BASE_URL}
ENV NEXT_PUBLIC_API_PUBLIC_BASE_URL=${NEXT_PUBLIC_API_PUBLIC_BASE_URL}

# 3. Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# 4: Copy standalone build artifacts
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/. ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 5. Copy runtime node_modules
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# 6. Switch to non-root user
USER nextjs

# 7. Expose port
EXPOSE ${APP_PORT}

# 8. Start Next.js server
CMD HOSTNAME=${APP_HOST} PORT=${APP_PORT} node server.js

# --------------------------------------------------
# Development runner
# --------------------------------------------------
FROM base AS runner-dev

# 1. Set working directory
WORKDIR /app

# 2. Set development env
ENV NODE_ENV=development \
		NEXT_TELEMETRY_DISABLED=1 \
		APP_HOST="0.0.0.0" \
		APP_PORT=3000

# 3. Copy source code
COPY . .

# 4. Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# 5. Expose port
EXPOSE ${APP_PORT}

# 6. Start Next.js in development mode (Turbopack enabled)
CMD ["sh", "-c", "yarn dev --turbopack --port ${APP_PORT} --hostname ${APP_HOST}"]