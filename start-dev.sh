#!/bin/bash

echo "🚀 Starting AI Image Generator DALL-E Development Environment..."

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "❌ Port $1 is already in use. Please stop the service using port $1 first."
        exit 1
    fi
}

# Check if required ports are available
echo "🔍 Checking port availability..."
check_port 5000
check_port 3000

# Start server in background
echo "🖥️  Starting server on port 5000..."
cd server
npm run dev &
SERVER_PID=$!

# Wait a moment for server to start
sleep 3

# Start client
echo "🌐 Starting client on port 3000..."
cd ../client
npm start &
CLIENT_PID=$!

echo ""
echo "✅ Development environment started!"
echo "📱 Client: http://localhost:3000"
echo "🖥️  Server: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both services"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $SERVER_PID 2>/dev/null
    kill $CLIENT_PID 2>/dev/null
    echo "✅ Services stopped"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait
