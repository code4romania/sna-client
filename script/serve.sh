#!/usr/bin/env bash

cd "$(dirname "$0")/.."

export PORT=8889
nc -z 127.0.0.1 $PORT

if [ "$?" -ne 0 ]; then
  npm run build:server:w &
  JOBS=$(jobs -p | tr '\n' ' ')
  trap "kill -9 $JOBS" SIGHUP SIGINT SIGTERM
  npm run start
else
  echo "The port $PORT is already taken"
  exit 1
fi
