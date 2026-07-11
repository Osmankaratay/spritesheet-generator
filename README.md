# 2D Spritesheet Generator

A web application that analyzes game design documents to automatically identify required sprite assets, generates detailed specifications for each spritesheet, and produces pixel-perfect 2D spritesheets sequentially using AI-powered generation capabilities.

## Features

- **GDD Analysis**: Parse game design documents to extract sprite requirements
- **Sequential Generation**: Generate spritesheets with AI (Manual and Full-Auto modes)
- **Sprite Editing**: Edit sprites with background removal and properties
- **Asset Management**: Download, export, and version control sprites
- **Admin Panel**: Comprehensive system management and monitoring
- **Rate Limiting**: Per-user quota tracking and management
- **OAuth Integration**: Google authentication

## Tech Stack

### Backend
- Node.js 18+ with Express.js
- PostgreSQL 14+ for data persistence
- TypeScript for type safety
- JWT for authentication

### Frontend
- React 18+ with TypeScript
- Tailwind CSS for Editorial aesthetic styling
- Vite for fast builds
- Redux for state management

### External APIs
- Google OAuth 2.0
- OpenAI GPT-4 for GDD analysis
- Image generation API
- Kling AI for image expansion

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Osmankaratay/spritesheet-generator.git
cd spritesheet-generator
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. Setup database
```bash
npm run db:migrate
npm run db:seed
```

5. Start development servers
```bash
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:3000

## Project Structure

```
.
├── backend/                 # Express API server
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── types/          # TypeScript types
│   │   └── utils/          # Utility functions
│   ├── migrations/          # Database migrations
│   ├── tests/              # Test files
│   └── package.json
├── frontend/                # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── store/          # Redux store
│   │   ├── styles/         # Tailwind CSS
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   └── App.tsx
│   ├── public/
│   └── package.json
├── docs/                    # Documentation
├── docker-compose.yml       # Docker setup
├── .env.example            # Environment template
└── README.md
```

## Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

### Database Migrations
```bash
npm run db:migrate
npm run db:rollback
```

## API Documentation

See `/docs/API.md` for detailed API endpoint documentation.

## Architecture

See `/docs/ARCHITECTURE.md` for system architecture and design decisions.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## License

MIT License - see `LICENSE` file for details.

## Support

For issues and questions, please open a GitHub issue.
