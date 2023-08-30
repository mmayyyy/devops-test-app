# DevOps Test App

## Overview

This repository contains a Node.js app for the technical test for the DevOps Engineer role. The Node.js app sends metrics to a StatsD and Graphite service.

## Table of Contents

1. [Files](#files)
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Architecture](#architecture)

## Files

- `index.js`: The Node.js app code. Metrics are sent to StatsD and eventually stored in Graphite.
- `Dockerfile`: File for creating the Docker container.
- `docker-compose.yaml`: Docker Compose file to set up Node app, StatsD, and Graphite.

### Node.js App Improvements

The initial version of `index.js` had hardcoded values for the StatsD server and metrics. The improved version has several enhancements:

- Environment variable support for configurations such as StatsD host, port, metric name, and interval.
- Logs configurations at startup for better debugging.

## Getting Started

To get started, clone the repository and navigate to the `app` directory.

```bash
git clone https://github.com/mmayyyy/devops-test-app
cd devops-test-app/app
```

## Usage

### Building the Docker Image

```bash
docker build -t devops-test-app .
docker tag devops-test-app:latest devops-test-app:vx.x.x
docker push devops-node-app:vx.x.x

```

### Running with Docker-Compose (for local development)

Navigate to the root directory and execute:

```bash
docker-compose up --build
```

## Architecture

The application has the following architecture:

```
App -> StatsD -> Graphite
```

- `App`: The Node.js application that sends metrics.
- `StatsD`: Listens for incoming metrics and forwards them.
- `Graphite`: Stores and visualizes the metrics received from StatsD.

Note: StatsD and Graphite are running in the same Docker container (service).
