# --------------------------------------------------
# Dependencies
# --------------------------------------------------
FROM node:22-alpine AS deps

WORKDIR /srv/app

# Build deps for native modules
RUN apk add --no-cache \
		build-base \
		python3 \
		autoconf \
		automake \
		zlib-dev \
		libpng-dev \
		nasm \
		vips-dev \
		git \
		bash

# Copy package manifests
COPY package.json yarn.lock ./

# Run yarn install locally *before* docker build to pre-seed cache
# Yarn inside Docker will just reuse the cache instead of fetching everything
RUN yarn config set registry https://registry.npmjs.org/ \
	&& yarn config set network-timeout 600000 -g \
	&& yarn install --frozen-lockfile --prefer-offline

# --------------------------------------------------
# Builder
# --------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /srv/app

# Copy deps from deps stage
COPY --from=deps /srv/app/node_modules ./node_modules
COPY --from=deps /srv/app/package.json ./package.json
COPY --from=deps /srv/app/yarn.lock ./yarn.lock

# Copy app sources
COPY . .

# Prune to production dependencies only
RUN yarn install --frozen-lockfile --production --ignore-scripts --prefer-offline

# --------------------------------------------------
# Production runner
# --------------------------------------------------
FROM node:22-alpine AS runner-prod

WORKDIR /srv/app

RUN apk add --no-cache tini vips

ENV NODE_ENV=production \
		STRAPI_TELEMETRY_DISABLED=true \
		BROWSER=false

# Copy only what's needed
COPY --from=builder /srv/app/package.json ./package.json
COPY --from=builder /srv/app/yarn.lock ./yarn.lock
COPY --from=builder /srv/app/node_modules ./node_modules
COPY --from=builder /srv/app/src ./src
COPY --from=builder /srv/app/config ./config

EXPOSE ${API_PORT}

ENTRYPOINT ["/sbin/tini","--"]
CMD ["yarn","start"]