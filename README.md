# JARVIS RCSA Intelligence Platform - Setup Guide

## Project Overview
JARVIS RCSA is an intelligent platform that combines a Node.js backend with a React frontend, using PostgreSQL for data storage and Claude AI for intelligent features.

## Prerequisites
- Node.js 18.x or higher
- PostgreSQL 12+ 
- Git

## Quick Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/jagdisharma/jarvis_rcsa_setup.git
cd jarvis_rcsa_setup
```

### 2. Database Setup
```bash
# Create PostgreSQL database
psql -U postgres
CREATE DATABASE jarvis_rcsa;
\q
```

### 3. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory with your configuration:
```env
# Database
DB_NAME=jarvis_rcsa
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Claude AI
CLAUDE_API_KEY=your_claude_api_key_here

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Application
NODE_ENV=development
PORT=5050
FRONTEND_URL=http://localhost:3000

# File Upload
MAX_FILE_SIZE=52428800
UPLOAD_PATH=./uploads

# Export Settings
EXPORT_PATH=./exports
```

Run database migrations:
```bash
npm run migrate
```

Start backend server:
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file in frontend directory:
```env
REACT_APP_API_URL="http://localhost:5050"
```

Start frontend development server:
```bash
npm run dev
```

## Project Structure
```
jarvis_rcsa/
├── backend/
│   ├── src/
│   ├── config/
│   ├── database/
│   ├── migrations/
│   ├── scripts/
│   ├── uploads/
│   ├── exports/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
└── README.md
```

## Key Features
- Document processing and analysis
- Claude AI integration for intelligent insights
- User authentication and authorization
- File upload and management
- Report generation and export
- Responsive React frontend with TypeScript

## Available Scripts

### Backend
- `npm start` - Production server
- `npm run dev` - Development server with nodemon
- `npm run migrate` - Run database migrations

### Frontend  
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Serve production build

## Technology Stack
- **Backend**: Node.js, Express, Sequelize ORM, PostgreSQL
- **Frontend**: React, TypeScript, Tailwind CSS
- **AI**: Anthropic Claude API
- **Authentication**: JWT
- **File Processing**: Multer, Sharp, PDF-parse, Mammoth

## Environment Variables
Make sure to update the following environment variables with your actual values:
- `DB_PASSWORD` - Your PostgreSQL password
- `CLAUDE_API_KEY` - Your Anthropic Claude API key
- `JWT_SECRET` - Generate a secure random string

## Next Steps
1. Access the application at http://localhost:3000
2. Backend API will be available at http://localhost:5050
3. Create your first user account
4. Start uploading and processing documents

For any issues or questions, please refer to the project documentation or create an issue in the repository.