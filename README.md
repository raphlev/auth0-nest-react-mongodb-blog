# Build a blog using Nest.js, TypeScript, React and MongoDB
Application repo for a simple blog application built with Nest.js, TypeScript, React and MongoDB.
# Quick Start
ackend:
```bash
cd ./blog-backend
npm install && npm run start:dev
```
Frontend:
```bash
cd ./blog-frontend
yarn install && yarn start
```
# How To
https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-1/
https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-2/

# Authentication
This project is a single Page Application written in react for the front-end and nest for the backend with typescript and mongodb atlas database.
For the Authentication we use SaaS auth0.com end point.
- Create auth0 end point Application: here we use what is described in the second part Part-2 of the tutorial above: set up a single page application on Auth0. Sign in to your Auth0 Dashboard and head over to the application section of your Auth0 management dashboard and click on CREATE APPLICATION. Enter a name (exemple modern-full-stack-nest.js-react-mongodb-auth0_end_point) for your application in the form that will be displayed. Next, choose Single Page Web Applications from the list of application type and then hit the CREATE button to complete this process. Once you are done, you will be redirected to a page where you can view the details of your application. Now, click on the Settings tab on that page and scroll down to locate the following fields:
Allowed Callback URLs
Allowed Web Origins
Allowed Logout URLs
Use http://localhost:3000 as the value for each of the field because your React application is accessible on that URL during development. Feel free to use a different URL if your application is in production already. Next, you can now click on the SAVE CHANGES button. Copy the Domain, Client ID, and save it somewhere as you will need it in .env files :
```bash
(server) YOUR_AUTH0_DOMAIN = (client) REACT_APP_AUTH0_DOMAIN = Domain
(client) REACT_APP_AUTH0_CLIENT_ID = Client ID
```
## Note 
In the first pârt Part-1 of the tutorial above, the Single Page Application client react app was not implemented, instead of creating SPA application end point in auth0, only an API end point was created in order to be tested with client http tool (postman). This part is not needed here for this entire application since we are using SPA to call auth0 end point API.

## Getting Started
This prototype is divided into two separate sections. Namely the Backend ( Built with Nest.js) and the frontend
( Built with React ).

For the development, install TypeScript and nest globally on your machine if you don't have it installed already:

```bash
npm install -g typescript
npm install -g @nestjs/cli
```
### Clone the repository
To easily set up the application, clone this repository which contains directory for both sections of the project ( i.e `blog-backend` and `blog-frontend`)

```bash
git clone https://github.com/yemiwebby/nest-react-project.git
```

## Change directory into the newly cloned project
```bash
cd nest-react-project
```

## Backend
### Change directory into the backend
```bash
cd blog-backend
```

### Install backend dependencies

```bash
npm install
```

### Create .env file
Once the installation process is complete, create a `.env` file in ./blog-backend:

```bash
touch .env
```

Open the newly created file and add the following code:

```
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_AUDIENCE=http://localhost:5000/api
```

Ensure that you replace the `YOUR_AUTH0_DOMAIN` placeholder with the appropriate credentials as obtained from your Auth0 dashboard.
AUTH0_AUDIENCE is the url of the backend server


### MongoDB
Ensure that you have mongoDB installed on your machine before running the application.

Start mongoDB:

```bash
sudo mongod
```

Alternative: create instance at https://cloud.mongodb.com SaaS database and update blog-backend\src\app.module.ts with new mongodb+srv url (solution implemented here)

### Run the application
Open another terminal and still within the `blog-backend` project directory run the application with:

```bash
npm run start:dev
```

This will start the backend application on port `5000`. This was modified to avoid confliction with the frontend application which by default will run on port `3000`


## Frontend
Open another terminal from the `nest-react-project` and navigate to the `blog-frontend` folder to setup the frontend

### Frontend dependencies
```bash
cd blog-frontend
npm install
```

### Run the frontend app

```bash
npm start
```

### Create .env file and include Auth0 App credentials

Create a `.env` file in ./blog-frontend as shown here:

```
touch .env
```

Open the file and paste the following code in it:

```
REACT_APP_AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
REACT_APP_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
REACT_APP_AUTH0_AUDIENCE=http://localhost:5000/api
REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000
REACT_APP_SERVER_BASE_URL=http://localhost:5000
```

Replace `YOUR_AUTH0_CLIENT_ID`, `YOUR_AUTH0_DOMAIN` placeholder with your Auth0 credentials.
AUTH0_AUDIENCE is the url of the backend server
### Test the application
Finally open your browser and view the application on http://localhost:3000

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/#mac-stable), [MongoDB](https://docs.mongodb.com/v3.2/installation/) and [TypeScript](https://www.typescriptlang.org/)


## Built With
[Nest.js]()
[React.js]()
[Auth0]() 
[TypeScript]()
[MongoDB]() 
