# Breakout Data

This is the exploritory plaground for getting the kinks out of the new breakout data api.

## Pre Reqs

To use this, you need to have [Docker](https://docs.docker.com/get-docker/) installed and running.

### Nice to Have

- [GraphiQl](https://www.electronjs.org/apps/graphiql)
- [Postman](https://www.postman.com/)

## Setup

Theres a few steps needed to get started.

### Env

In the root, `db/` and `redis/` folders, there is a file called `env.example`. This file should be copied, then pasted into a newly created file called `.env.local`. 

The `.env.local` file is in the `.gitignore` because everyone's env is different.

### Dependencies

In the root, `src/lambdas/graphql`, and `src/lambdas/redis`, run `yarn` to install the necessary dependencies.

### Containers

This entire setup is containerized for easy development.

To start the containers, run `yarn run-containers` in the root directory.

If that's not your thing, there's individual commands for each container in their respective directories.

## Development

To run the API, run `yarn start` from the root dir. 

This will launch a simulated API gateway, allowing you to send requests to your localhost, and run the lambdas. 

They say this has live re-loading, but my results have been spotty at best. It's best to kill, and restart the process when changed are made.

## Structure

Each folder inside of `src/lamdas/` is a lambda. It is an independently controlled function that has 0 dependency on anything outside of it's folder.

To install new dependencies for it, run `yarn add DEPENDENCY` in the corresponding lambda folder.

## Webpack

Each Lmbda is bundled with webpack, meaning that some dependecies will not be compatible. For example, [bcrypt](https://www.npmjs.com/package/bcrypt) is written in C, meaning it cannot be bundled as it needs the Node runtime to properly execute it's code.

This results in tremendously smaller artifact sizes, leading to faster start up times.