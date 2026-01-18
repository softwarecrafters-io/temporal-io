# Temporal Self-Hosted for Dokploy

Temporal.io configuration for deployment on Dokploy.

## Components

| Service | Port | Description |
|---------|------|-------------|
| temporal | 7233 | gRPC server (API for workers/clients) |
| temporal-ui | 8233 | Web admin interface |

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

## Local Usage

```bash
cp .env.example .env
# Edit .env with your values
docker compose up -d
```

## Verify Installation

```bash
temporal workflow list --address localhost:7233
```

## URLs

- **Web UI**: http://localhost:8233
- **gRPC API**: localhost:7233
