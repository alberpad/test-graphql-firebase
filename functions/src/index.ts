// require both the firebase function package to define function   // behavior and your local server config function
import * as functions from 'firebase-functions';
import { configureServer } from './server';
//initialize the server
const server = configureServer();
// create and export the api
export const api = functions.https.onRequest(server);
// module.exports = { api };
