#!/bin/bash

# Optional: set -e to stop if anything fails
set -e

# Define image and container name
IMAGE_NAME="nikysite-frontend:latest"
CONTAINER_NAME="nikysite-frontend"
PORT=8080

echo "🔧 Building Docker image..."
docker build -t $IMAGE_NAME .

echo "🧹 Stopping & removing old container if it exists..."
docker rm -f $CONTAINER_NAME 2>/dev/null || true

echo "🚀 Running new container on port $PORT..."
docker run --rm -d \
  --name $CONTAINER_NAME \
  -p $PORT:80 \
  $IMAGE_NAME

echo "✅ Website should now be available at: http://localhost:$PORT"
