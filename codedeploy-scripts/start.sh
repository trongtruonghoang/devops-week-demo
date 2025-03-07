#!/bin/bash
cd /var/www/next-app
npm install --omit=dev  # Install only production dependencies
pm2 restart next-app || pm2 start npm --name "next-app" -- start