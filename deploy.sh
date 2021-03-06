#!/usr/bin/env bash

if [ "$HEROKU" != "true" ] || [ "$DEPLOY_STARTED" = "true" ]; then
    exit 0
fi

echo "Build on Heroku"
export DEPLOY_STARTED="true"
rm -rf test
yarn build
db-migrate --config db-config.js --env prod up

rm -rf build/src/frontend
rm -rf build/views
rm -rf styles
rm -rf views
rm -rf .circleci
rm -rf logs
rm -rf migrations
rm -rf src
