.PHONY: start stop restart build force-build start-app-dev start-app-storybook start-app-preview build-app start-api-dev build-api

start:
	bash scripts/prod/start.sh
	
force-start:
	bash scripts/prod/start.sh --force

stop:
	bash scripts/prod/stop.sh

restart:
	bash scripts/prod/restart.sh

build:
	bash scripts/prod/build.sh
	
force-build:
	bash scripts/prod/build.sh --force

start-app-dev:
	bash scripts/dev/start-app.sh
	
start-app-storybook:
	bash scripts/dev/start-app-storybook.sh
	
start-app-preview:
	bash scripts/dev/start-app-preview.sh

build-app:
	bash scripts/dev/build-app.sh

start-api-dev:
	bash scripts/dev/start-api.sh

build-api:
	bash scripts/dev/build-api.sh