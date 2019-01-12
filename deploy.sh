#!/usr/bin/env bash

if [ "$HEROKU" = "true" ]; then
    echo "Build on Heroku"
    yarn build
    db-migrate --config db-config.js --env prod up
fi
