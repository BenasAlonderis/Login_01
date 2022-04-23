# Front-End Developer Candidate Task

## Overview

- App was created without using `$ npx create-react-app`;
- App is using **redux**;
- Design is **responsive**;
- App works on **modern browsers**;
- Used a css framework **Tailwindcss**;
- **Email** and **password** fields are required, **email** format gets checked with a custom **pattern**;
- **API** calls are made to **expressjs** once logging in and when checking the **JWT** stored in `localstorage` if it exists;
- A **JWT** is stored in `localstorage` after a successful login, so you wouldn't need to re-login later;
- Once logged in a **greetings message** is thrown and you get an option to **logout**;
- Added a loader;

## populate the .env file

- `BE_PORT` - **BE server port**;
- `TOKEN_SECRET` - Secret the **JWT** uses;
- `LOGIN_EMAIL` - **Email** used for successful login;
- `LOGIN_PASSWORD` - **Password** used for successful login;

## run the app

- Fill out the `.env` file;
- To run the react app `$ npm run react`;
- To run the expressjs server `$ npm run node`;

## backend

- /login endpoint - checks credentials, if credentials are correct returns a **JWT**;
- /authenticate endpoint - checks if the **JWT** is valid, if valid returns the **email** stored in the **JWT**;
