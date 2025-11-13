#!/bin/bash
# Development helper script
# This script ensures the correct Node version is used

echo "📦 Checking Node version..."

# Load nvm if available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    . "$HOME/.nvm/nvm.sh"
fi

# Use the correct Node version
if command -v nvm &> /dev/null; then
    nvm use 16 || nvm use
else
    echo "⚠️  nvm not found. Please install nvm or use Node.js 16.x manually"
    echo "Current Node version: $(node -v)"
    exit 1
fi

echo "✅ Using Node $(node -v)"
echo "🚀 Starting Gatsby development server..."
echo "   Your site will be available at: http://localhost:8000/"
echo ""

npx gatsby develop
