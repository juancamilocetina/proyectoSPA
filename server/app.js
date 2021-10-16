const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config')

// cargando los roueters
// ...

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Configurando Header HTTP
// ...

// Rutas basicas 
// ...

module.exports = app;