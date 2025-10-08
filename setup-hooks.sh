#!/bin/bash
# Setup script for installing Git hooks

echo "🔧 Setting up Git hooks for Stewart-striping..."

# Check if .githooks directory exists
if [ ! -d ".githooks" ]; then
  echo "❌ .githooks directory not found"
  exit 1
fi

# Configure Git to use .githooks directory
git config core.hooksPath .githooks

# Make hooks executable
chmod +x .githooks/*

echo "✅ Git hooks successfully configured!"
echo ""
echo "The following hooks are now active:"
echo "  - pre-commit: Runs linting and code checks"
echo "  - pre-push: Runs tests and build checks"
echo "  - commit-msg: Validates commit messages"
echo ""
echo "To bypass hooks when needed, use --no-verify flag"
