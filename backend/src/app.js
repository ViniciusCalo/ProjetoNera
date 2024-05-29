const express = require ('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Middleware-Routes
app.use(bodyParser.json());
//CORS Function to API Authorization
app.use(cors());

app.use(router);
module.exports = app;