#!/usr/bin/env bash

if [ "$HEROKU" = "true" ]; then
    echo "Build on Heroku"
    yarn build
    export DATABASE_CONNECTION_URL=$DATABASE_URL
    unset DATABASE_URL
    echo "DATABASE_CONNECTION_URL = $DATABASE_CONNECTION_URL"
    echo "DATABASE_URL = $DATABASE_URL"
    db-migrate --config db-config.js --env prod up
fi
