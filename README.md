# Temporal Self-Hosted for Dokploy

Temporal.io configuration for deployment on Dokploy.

## Components

| Service | Port | Description |
|---------|------|-------------|
| temporal | 7233 | gRPC server (API for workers/clients) |
| temporal-ui | 8233 | Web admin interface |

## Local Development

### 1. Install Temporal CLI

```bash
brew install temporal
```

### 2. Start the dev server

```bash
temporal server start-dev
```

### 3. Run the worker (new terminal)

```bash
npm run worker
```

### 4. Start a workflow (new terminal)

```bash
npm run start
```

### 5. View in UI

Open http://localhost:8233

## Project Structure

| File | Description |
|------|-------------|
| `src/activities.ts` | Tasks that can fail and retry |
| `src/workflows.ts` | Orchestrates activities |
| `src/worker.ts` | Executes your code (must be running) |
| `src/client.ts` | Starts workflows |

## Deployment on Dokploy

### 1. Create PostgreSQL Database

1. Go to Dokploy dashboard
2. Create a new Database service (PostgreSQL)
3. Note the internal hostname (e.g., `temporal-temporaldb-xxxxx`)

### 2. Deploy Temporal

1. Create a new Compose project in Dokploy
2. Connect this repository or paste the docker-compose.yml
3. Set environment variables:
   - `POSTGRES_USER`
   - `POSTGRES_PASSWORD`
4. Deploy

### 3. Expose Ports

Configure domains/ports in Dokploy:
- Port 7233 for gRPC API
- Port 8233 for Web UI

## URLs

- **Web UI**: http://localhost:8233
- **gRPC API**: localhost:7233
