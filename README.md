# express template

## Setup

You need to install the dependencies: `yarn install`  or  `npm install`


## [Prettier](https://prettier.io/)

This project has a `.prettierrc` file which is a config file for prettier. This is a code formatter tool which will help you to have clean code.

You're free to edit this file if you don't like this config options

You need to install the [`Prettier - Code formatter`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension for visual studio code and then go to settings and enable the options `Editor: Format On Paste`, `Editor: Format On Save` and `Prettier: Require Config`

## Environment variables

In this project you're able to use environment variables. You need to create a copy of the `.env.example` file, it should be named `.env` you'll be able to use something like `process.env.MY_VARIABLE`

There are some environment variables needed to run the project:

```
PORT: This is the port in which the server will run
MONGO_URI: The MongoDB's uri, you can use a local database or a cloud database
SECRET_KEY: This is a secret key for Json Web Tokens

You can add more environment variables if you need to
```

## Run the project

There are only one script in the `package.json` which is `start`

Once you installed the dependencies and have an `.env` file you can run: `npm run start` or `yarn start`
