#!/bin/bash
set -e

echo "Starting Vercel build process..."
echo "Node version: $(node -v)"
echo "npm version: $(npm -v)"

# Clean install with exact versions from lockfile
npm ci

# Show what we installed
echo "Installed vite version:"
npm ls vite

# Build
npm run build

echo "Build completed successfully!"
