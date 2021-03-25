# pull official base image
FROM node:13.12.0-alpine

RUN apk add --no-cache python py-pip && \
    apk add --no-cache gcc python-dev musl-dev && \
    pip --disable-pip-version-check install \
        boto3 botocore awscli && \
    apk -v --purge --no-cache del gcc python-dev musl-dev 

# set working directory
WORKDIR /app

ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn
