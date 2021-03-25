#!/bin/sh

Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo Deploying the Docker container )$Color_Off"
printf "\n\n"

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

aws ecr get-login-password \
    --region us-east-1 \
| docker login \
    --username AWS \
    --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

docker build -t $REPOSITORY_NAME:$IMAGE_TAG ../../../ui/
docker tag $REPOSITORY_NAME:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$REPOSITORY_NAME:$IMAGE_TAG

docker push $AWS_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/$REPOSITORY_NAME:$IMAGE_TAG