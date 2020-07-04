// include other main deps
const express = require("express");
const compression = require('compression');
const APP_ROOT = require('app-root-path');
const dotenv = require( 'dotenv');

dotenv.config();

// instantiate express
const app = express();
const PRODUCTION = process.env.NODE_ENV === 'production';

app.use(compression());

app.use(function (req, res, next) {
  console.log("The file " + req.url + " was requested.");
  next();
});
// static serving from /dist
app.use(express.static(APP_ROOT + '/dist'));

const serverPort = process.env.PORT || 3000;
app.listen(serverPort);
console.log(`Express server @ http://localhost:${serverPort} (${PRODUCTION ? 'production' : 'development'})\n`);