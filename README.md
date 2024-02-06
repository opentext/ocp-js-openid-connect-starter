# OCP JavaScript OpenID Connect Starter Application

## Overview

This application demonstrates how to consume the IM services from the OpenText Cloud Platform using a Vanilla JavaScript sample application. This is intended to be a client-side browser app with the simplest possible set-up to get developers started making API calls to an OCP application using OpenID Connect with the OAuth `authorization_code` grant. This app will allow you to login using accounts set up within your OCP application and will handle the redirects to obtain the required credentials.

## Technologies

### Language

JavaScript

### Dependencies

[**Axios**](https://github.com/axios/axios)  
Promise based HTTP client for the browser and node.js.

[**OIDC Client**](https://github.com/authts/oidc-client-ts)  
Client-side OpenID Connect library to automatically handle the login process.

[**Vite**](https://github.com/vitejs/vite)  
Provides an easy to use front-end development environment.

[**Vite SSL Plugin**](https://github.com/vitejs/vite-plugin-basic-ssl)  
Adds SSL support to Vite.

## Prerequisites

- Install the [latest version of Node JS](https://nodejs.org/en/download/current).
- You must have a trial set up and have created an app within your organization which is assigned to a tenant.
- Add `https://localhost:4000` as redirect URL for the public service client.

>For background information on setting up an app within a tenant and adding redirect URLs see the [documentation](https://developer.opentext.com/imservices/developertools).

## Configuration

- Clone this repository and open it in your IDE. [Visual Studio Code](https://code.visualstudio.com/) can be used for this if you don't have a preferred IDE.
- Update the `.env` file and replace the values using the config for your OCP app.

## Usage

To run the application using Node.js, open a terminal in your IDE and run the following commands (from the project root).

```
npm install && npm start
```

- Go to https://localhost:4000
- Click the `Sign in` button.
- Sign in using your application user.
> This should go through the OpenID connect login process.
- When the login is successful, as a simple example, the app will make a call to the Content Metadata service to retrieve the traits. Some metadata for the traits will be written to a table on the page
> You can then add new samples in the [ocp](src/ocp) directory to make calls to other API endpoints and test interacting with the APIs using JavaScript. You can replace the existing code in [callOcp](src/callOcp.js) and use the token to make other calls.

## Background

### Authentication

Uses the public client id and will redirect to prompt for credentials using the `authorization_code` OAuth grant type. See [signIn](src/signIn.js) for the implementation.

### APIs

This example calls the [Content Metadata Service](https://developer.opentext.com/imservices/products/contentmetadataservice) and uses the following endpoint:

#### Trait

* GET Returns list of all trait definitions
