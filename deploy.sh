#!/usr/bin/env bash

if [ "$DEPLOY_STARTED" = "true" ]; then
    exit 0
fi

if [ "$HEROKU" = "true" ]; then
    export DEPLOY_STARTED="0"
    echo "Build on Heroku"
    yarn build
    export DATABASE_CONNECTION_URL=$DATABASE_URL
    unset DATABASE_URL
    echo "DATABASE_CONNECTION_URL = $DATABASE_CONNECTION_URL"
    echo "DATABASE_URL = $DATABASE_URL"
    yarn add pg-native
    db-migrate --config db-config.js --env prod up
fi
