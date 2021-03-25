#!/bin/sh

source .env

docker run \
	-it \
	-d \
	--name $CONTAINER_NAME \
	$REPOSITORY_NAME:$IMAGE_TAG

docker exec \
  -it \
  $CONTAINER_NAME \
  /bin/sh