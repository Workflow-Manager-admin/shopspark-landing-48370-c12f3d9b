#!/bin/bash
cd /home/kavia/workspace/code-generation/shopspark-landing-48370-c12f3d9b/shopSpark_landing
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
 if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

