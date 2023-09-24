$(shell echo UID=$(shell id -u) > .env)

ifneq ($(shell docker compose version 2>/dev/null),)
  DOCKER_COMPOSE=docker compose
else
  DOCKER_COMPOSE=docker-compose
endif


build:
	$(DOCKER_COMPOSE) build app

run-dev:
	$(DOCKER_COMPOSE) up app

shell:
	$(DOCKER_COMPOSE) exec app bash