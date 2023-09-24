$(shell echo UID=$(shell id -u) > .env)

ifneq ($(shell docker compose version 2>/dev/null),)
  DOCKER_COMPOSE=docker compose
else
  DOCKER_COMPOSE=docker-compose
endif


build:
	$(DOCKER_COMPOSE) build frontend

run-dev:
	$(DOCKER_COMPOSE) up frontend

shell:
	$(DOCKER_COMPOSE) exec frontend bash