# Full Stack Application

Full stack application (MERN) and Sessions based Login and Sign-Up using Reactjs, Redux, Node.js + Express and MongoDB.

## Features

- Login page with success/error messages
- Register page with success/error messages
- Protected Dashboard page route that needs authentication to access
- Logout deletes session.

## Prerequisites

- [Frontend] React, redux
- [Backend] nodejs, expressjs
- [Database] MongoDB Atlas MongoURI (Local setup for mongodb can also be used. Instructions below)
- [Package Manager] NPM
- **.env file with ENV variables**, .env_template included

## Quick Start

1. Clone the repository

2. Install packages:

   ```
   npm install
   ```

3. Run the project

   Project can be tested locally using the following commands:

   - Local frontend server

   ```
   npm start
   ```

   - Local backend server

   ```
   npm run start-server
   ```

   Please populate the .env file using the .env_template and the NODE_ENV is development

   Start Server ( Start Nodejs server and serve the request using node server)

   ```
   npm run server
   ```

   Please populate the .env file using the .env_template and the NODE_ENV is production

## Additional Features

- We can also dockerize the app and make it easy to deploy
- A testing framework can used to test the application. Most popular ones would be haivng snapshot testing using enzyme and jest but react testing library can also be used.
- CI/CD or github action can be used to easily deploy the application on live.

## Install Mongodb

Please follow this <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/">link</a> to setup local mongodb server.
