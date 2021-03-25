#!/bin/sh

Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo Deploying the latest artifact to the $STAGE bucket.. )$Color_Off"
printf "\n\n"

rm -r dist/
mkdir dist/

sam build \
  -b dist/ \
  -t template.yaml	

# Event though this isnt using SAM, it's easier to wrap the package and deploy commands into one
sam deploy \
	--s3-bucket $S3_BUCKET \
  --template-file dist/template.yaml \
  --no-fail-on-empty-changeset \
  --stack-name $STACK_NAME \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides \
			Stage=$STAGE \
			DatabaseName=$DB_NAME \
			DatabaseUsername=$DB_USER \
			DatabasePassword=$DB_PASSWORD \
			S3Bucket=$S3_BUCKET \
			Stage=$STAGE


if [ $? == 0 ]
then
  printf "\n\n$Green$( echo Successful deployment.. )$Color_Off"
  printf "\n\n"
else
  printf "\n\n$Red$( echo Unsuccessful deployment.. )$Color_Off"
  printf "\n\n"
  exit 1
fi