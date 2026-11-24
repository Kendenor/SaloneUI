#!/usr/bin/env bash
# SaloneUI 1-Command Release Script
# Usage:
#   ./scripts/release.sh patch   (e.g., 1.2.0 -> 1.2.1)
#   ./scripts/release.sh minor   (e.g., 1.2.0 -> 1.3.0)
#   ./scripts/release.sh major   (e.g., 1.2.0 -> 2.0.0)

set -e

BUMP_TYPE=${1:-patch}

echo "1. Running tests..."
npm test

echo "2. Rebuilding distribution files..."
npm run build

echo "3. Bumping version ($BUMP_TYPE) and creating Git tag..."
npm version $BUMP_TYPE -m "chore(release): %s"

echo "4. Pushing commits and tags to GitHub..."
git push origin main
git push origin --tags

echo "Done! The GitHub Actions Prepare Release workflow will now draft the release."
