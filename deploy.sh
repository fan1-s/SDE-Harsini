#!/bin/bash

# Run the build command
npm run build

# Check the exit status of the previous command (npm run build)
if [ $? -eq 0 ]; then
    echo "Build successful, Restarting the application..."
    systemctl restart pgagi-server.service
else
    echo "Build error"
fi
