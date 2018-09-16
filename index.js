/*
 * @Author: Benjamin Lewis 
 * @Date: 2018-09-16 00:11:04 
 * @Last Modified by: Benjamin Lewis
 * @Last Modified time: 2018-09-16 03:07:06
 */

/* ===================================== */
/*               IMPORTS                 */
/* ===================================== */

/* Libraries */
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

/* app */
const router = require('./routes');

/* ===================================== */
/*                 SETUP                 */
/* ===================================== */

dotenv.config(); // Initialize environment variables;

const app = express(); // Create server.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Index page for project
app.get('/', (req, res) => {
  const response = '<h1>Tabeel Guide API</h1>';
  res.send(response);
});

// Add all api available routes.
router.addRoutes(app);

/* ===================================== */
/*            SERVER LAUNCH              */
/* ===================================== */

const PORT = process.env.PORT || 8081;
const appListenCallback = () => console.log(`App running on port: ${server.address().port}`);
const server = app.listen(PORT, appListenCallback);