#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Determine the absolute path to the project root directory (two levels up from this script's location).
PROJECT_ROOT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"

# Check if the .env.development file exists in the project root; exit with error if not found.
if [ ! -f .env.development ]; then
  echo "Error: env.development file does not exist." >&2
  exit 1
fi

# Change directory to the frontend app package.
cd $PROJECT_ROOT_DIR/packages/app

# Export all variables from the .env.development file to the environment.
set -a
source $PROJECT_ROOT_DIR/.env.development
set +a

# Public variables
export NEXT_PUBLIC_API_PUBLIC_BASE_URL="${API_PUBLIC_BASE_URL}"
export NEXT_PUBLIC_STATIC_BASE_URL="${STATIC_BASE_URL}"
export NEXT_PUBLIC_APP_BASE_URL="${APP_BASE_URL}"

# Install dependencies for the app package.
yarn install

# Start Storybook development server
yarn storybook