# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build -ldflags="-s -w" -trimpath
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
GOMOD=$(GOCMD) mod
BINARY_NAME=portfolio
BINARY_UNIX=$(BINARY_NAME)_unix

# Templ parameters
TEMPL=go tool templ

.PHONY: all build clean test coverage deps templ run dev help

all: test build ## Run tests and build

build: templ ## Build the binary
	$(GOBUILD) -o $(BINARY_NAME) -v

clean: ## Remove build artifacts
	$(GOCLEAN)
	rm -f $(BINARY_NAME)
	rm -f $(BINARY_UNIX)
	rm -f *_templ.go
	rm -f components/*_templ.go

test: ## Run tests
	$(GOTEST) -v ./...


deps: ## Download dependencies
	$(GOMOD) download
	$(GOMOD) tidy

templ: ## Generate templ files
	$(TEMPL) generate

run: templ build ## Build and run the application
	./$(BINARY_NAME)

# Cross compilation
build-linux: templ ## Build for Linux
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 $(GOBUILD) -o $(BINARY_UNIX) -v

build-windows: templ ## Build for Windows
	CGO_ENABLED=0 GOOS=windows GOARCH=amd64 $(GOBUILD) -o $(BINARY_NAME).exe -v

build-darwin: templ ## Build for macOS
	CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 $(GOBUILD) -o $(BINARY_NAME)_darwin -v

# Format and lint
fmt: ## Format Go code
	$(GOCMD) fmt ./...
	$(TEMPL) fmt .

vet: ## Run go vet
	$(GOCMD) vet ./...

lint: fmt vet ## Run linters

help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
