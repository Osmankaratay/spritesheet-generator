# System Architecture

## Overview

The 2D Spritesheet Generator is a full-stack web application with the following architectural layers:

```
Frontend (React + TypeScript)
  - Pages, Components, Store, Services
           ||
           v HTTP/REST
           ||
Backend (Express + TypeScript)
  - Routes, Controllers, Services, Models
           ||
      Database | Cache | External APIs
```

## Key Components

### Frontend Architecture

**Pages:**
- LoginPage - Authentication
- HomePage - Platform overview
- ProjectAlbumPage - Project portfolio
- ProjectDetailPage - Individual project view
- InputAnalysisPage - GDD input & LLM analysis
- AssetPlanningPage - Spritesheet specifications review
- GenerationWorkflowPage - Sequential sprite generation
- SpriteEditPage - Sprite editing with background removal
- DownloadExportPage - Asset packaging & download
- AdminDashboard - System management (admin only)

### Backend Architecture

**Models:**
- User - User accounts with roles and quota
- Project - Game projects
- Sprite - Individual sprite assets
- SpriteVersion - Version history for sprites
- Generation - Generation records with metadata
- RateLimit - User rate limit quotas
- APIKey - Admin API key management
- AuditLog - Security audit trails

**Services:**
- AuthService - Authentication & authorization
- AnalysisService - GDD parsing via LLM
- GenerationService - Sprite generation coordination
- ImageService - Image processing & storage
- RateLimitService - Quota tracking & enforcement
- AdminService - Admin operations

## Database Schema

**users** - User accounts with roles and quota
**projects** - Game projects
**sprites** - Individual sprite assets
**sprite_versions** - Version history for sprites
**generations** - Generation records with metadata
**rate_limits** - User rate limit quotas
**audit_logs** - Security audit trails

## Security

- JWT tokens with expiration
- Google OAuth 2.0 integration
- Password hashing with bcrypt
- Role-based access control (RBAC)
- Rate limit enforcement
- HTTPS/TLS encryption
- SQL injection prevention
- CSRF protection

## Performance Optimization

- Image lazy loading
- Code splitting and tree-shaking
- Database query optimization
- Redis caching
- API response pagination
- Efficient state management
