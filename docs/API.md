# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication

Most endpoints require JWT token:
```
Authorization: Bearer <jwt_token>
```

## Response Format

```json
{
  "success": true,
  "data": { /* response data */ },
  "error": null
}
```

## Key Endpoints

### Authentication
- POST /auth/register - Register new user
- POST /auth/login - Login
- GET /auth/google - Google OAuth
- GET /auth/me - Current user

### Projects
- POST /projects - Create project
- GET /projects - List projects
- GET /projects/:id - Get project

### Analysis
- POST /analysis/create - Start GDD analysis
- GET /analysis/:id - Get analysis results
- GET /analysis/:id/status - Poll status

### Generation
- POST /generation/start - Start generation
- GET /generation/:id/status - Poll status
- POST /generation/:id/accept - Accept sprite
- POST /generation/:id/regenerate - Regenerate
- PUT /generation/:id/full-auto-mode - Toggle auto mode

### Download
- GET /download/sprite/:id - Download sprite
- GET /download/project/:id - Download project

### Admin
- GET /admin/dashboard - Dashboard
- GET /admin/users - List users
- PUT /admin/users/bulk/quota - Bulk quota update
- POST /admin/api-keys - Generate API key

## Error Codes

- INVALID_CREDENTIALS (401)
- UNAUTHORIZED (401)
- FORBIDDEN (403)
- NOT_FOUND (404)
- VALIDATION_ERROR (400)
- RATE_LIMIT_EXCEEDED (429)
