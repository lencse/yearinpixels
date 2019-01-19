#!/usr/bin/env bash

if [ "$HEROKU" != "true" ] || [ "$DEPLOY_STARTED" = "true" ] then
    exit 0
fi

echo "Build on Heroku"
export DEPLOY_STARTED="true"
yarn build
export DATABASE_CONNECTION_URL=$DATABASE_URL
unset DATABASE_URL
yarn add --dev pg-native
db-migrate --config db-config.js --env prod up
