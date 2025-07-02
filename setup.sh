#!/bin/bash

# JARVIS RCSA Setup Script
# This script sets up the complete JARVIS RCSA Intelligence Platform

echo "🚀 Setting up JARVIS RCSA Intelligence Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.x or higher."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL 12 or higher."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p backend/src/{config,middleware,models,routes,services,utils}
mkdir -p backend/{database,migrations,scripts,uploads,exports,logs}
mkdir -p frontend/{src,public}

# Set up backend
echo "⚙️ Setting up backend..."
cd backend

# Copy environment file
if [ ! -f .env ]; then
    cp .env.example .env
    echo "📝 Created .env file from .env.example"
    echo "⚠️  Please update the .env file with your actual values:"
    echo "   - DB_PASSWORD: Your PostgreSQL password"
    echo "   - CLAUDE_API_KEY: Your Anthropic Claude API key"
fi

# Install dependencies
if [ -f package.json ]; then
    echo "📦 Installing backend dependencies..."
    npm install
else
    echo "❌ package.json not found in backend directory"
    exit 1
fi

cd ..

# Set up frontend
echo "⚙️ Setting up frontend..."
cd frontend

# Copy environment file
if [ ! -f .env ]; then
    cp .env.example .env
    echo "📝 Created frontend .env file"
fi

# Install dependencies
if [ -f package.json ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
else
    echo "❌ package.json not found in frontend directory"
    exit 1
fi

cd ..

echo "✅ Setup completed successfully!"
echo ""
echo "🎯 Next steps:"
echo "1. Update backend/.env with your database credentials and API keys"
echo "2. Create PostgreSQL database: createdb jarvis_rcsa"
echo "3. Run database migrations: cd backend && npm run migrate"
echo "4. Start backend server: cd backend && npm run dev"
echo "5. Start frontend server: cd frontend && npm run dev"
echo ""
echo "🌐 Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:5050"
echo "   Health Check: http://localhost:5050/health"