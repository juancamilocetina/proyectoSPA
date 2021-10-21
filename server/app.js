const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config')

// cargando los routers
const authRoutes = require('./routers/auth')
const userRoutes = require('./routers/user');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Configurando Header HTTP
// ...

// Rutas basicas 
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;