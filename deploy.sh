#!/usr/bin/env bash

if [ "$HEROKU" = "true" ]; then
    echo "Build on Heroku"
    yarn build
    yarn migrate
fi
