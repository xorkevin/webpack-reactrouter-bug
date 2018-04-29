# METADATA
VERSION=v0.1.0

# CMD
BIN_DIR=bin

# DOCKER
IMAGE_NAME=nuke

all: build

clean-bin:
	if [ -d $(BIN_DIR) ]; then rm -r $(BIN_DIR); fi

clean: clean-bin

dev:
	BABEL_ENV=dev npm run build-dev

build: clean-bin
	BABEL_ENV=web npm run build

start:
	npm run serve

serve: build start
