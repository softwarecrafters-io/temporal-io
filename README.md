# Temporal Self-Hosted para Dokploy

Configuración de Temporal.io para despliegue en Dokploy.

## Componentes

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| temporal | 7233 | Servidor gRPC (API para workers/clientes) |
| temporal-ui | 8233 | Interfaz web de administración |
| postgresql | 5432 | Base de datos (interno) |
| temporal-admin-tools | - | Herramientas de administración CLI |

## Despliegue en Dokploy

1. Crear un nuevo proyecto en Dokploy
2. Seleccionar "Docker Compose"
3. Subir este repositorio o conectar con Git
4. Configurar las variables de entorno en Dokploy:
   - `POSTGRES_USER`
   - `POSTGRES_PASSWORD`
5. Configurar los dominios/puertos expuestos:
   - Puerto 7233 para API gRPC
   - Puerto 8233 para UI web

## Uso local

```bash
# Copiar variables de entorno
cp .env.example .env

# Editar .env con valores seguros
nano .env

# Iniciar servicios
docker compose up -d

# Ver logs
docker compose logs -f temporal
```

## Verificar instalación

```bash
# Usando temporal-admin-tools
docker compose exec temporal-admin-tools temporal workflow list

# O con temporal CLI local
temporal workflow list --address localhost:7233
```

## Crear namespace

```bash
docker compose exec temporal-admin-tools temporal operator namespace create mi-namespace
```

## URLs

- **UI Web**: http://localhost:8233
- **gRPC API**: localhost:7233
