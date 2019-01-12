#!/usr/bin/env bash

if [ "$DEPLOY_STARTED" = "true" ]; then
    exit 0
fi

if [ "$HEROKU" = "true" ]; then
    echo "Build on Heroku"
    export DEPLOY_STARTED="true"
    yarn build
    export DATABASE_CONNECTION_URL=$DATABASE_URL
    unset DATABASE_URL
    yarn add pg-native
    db-migrate --config db-config.js --env prod up
fi
