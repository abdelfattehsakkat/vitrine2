#!/bin/sh
set -e

echo "=== Starting Next.js Application ==="
echo "NODE_ENV: $NODE_ENV"
echo "PORT: $PORT"
echo "HOSTNAME: $HOSTNAME"
echo "Current directory: $(pwd)"
echo "Contents:"
ls -la

echo ""
echo "=== Checking server.js ==="
if [ -f "server.js" ]; then
    echo "✓ server.js found"
else
    echo "✗ server.js NOT found"
    exit 1
fi

echo ""
echo "=== Starting Node.js server ==="
exec node server.js
