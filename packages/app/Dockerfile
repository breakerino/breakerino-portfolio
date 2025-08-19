# --------------------------------------------------
# Base
# --------------------------------------------------
FROM node:22-alpine AS base

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

# 2. Install dependencies (pick yarn/npm/pnpm automatically)
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

# 1. Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/yarn.lock ./yarn.lock

# 2. Copy source code
COPY . .

# 3. Build Next.js app (standalone output)
RUN yarn build

# --------------------------------------------------
# Runner
# --------------------------------------------------
FROM base AS runner

# 1. Environment defaults (overridable)
ENV APP_HOST="0.0.0.0" \
	APP_PORT=3000 \
	APP_SERVER_PROTOCOL="http" \
	APP_SERVER_NAME="nextjs.local"

# --------------------------------------------------
# Production runner
# --------------------------------------------------
FROM runner AS runner-prod

# 1. Set production env
ENV NODE_ENV=production \
	NEXT_TELEMETRY_DISABLED=1

# 2. Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# 3. Copy production build artifacts
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 4. Copy runtime node_modules
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# 5. Switch to non-root user
USER nextjs

# 6. Expose port
EXPOSE ${APP_PORT}

# 7. Start Next.js server
CMD HOSTNAME=${APP_HOST} PORT=${APP_PORT} node server.js

# --------------------------------------------------
# Development runner
# --------------------------------------------------
FROM runner AS runner-dev

# 1. Set development env
ENV NODE_ENV=development \
	NEXT_TELEMETRY_DISABLED=1

# 2. Copy source code
COPY . .

# 3. Copy node_modules from deps (needed for next binary)
COPY --from=deps /app/node_modules ./node_modules

# 4. Expose port
EXPOSE ${APP_PORT}

# 5. Start Next.js in development mode (Turbopack enabled)
CMD ["sh", "-c", "yarn dev --turbopack --port ${APP_PORT} --hostname ${APP_HOST}"]