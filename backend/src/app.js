const express = require('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport')
require('./config/auth'); 
require('./models/associations');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json()); 
app.use(passport.initialize()); // Inicializa o Passport

// CORS Function to API Authorization
app.use(cors());

app.use(router);
module.exports = app;