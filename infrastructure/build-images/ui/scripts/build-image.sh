#!/bin/sh

source .env.local

docker build \
  -t \
  $IMAGE_NAME ../../../ui/