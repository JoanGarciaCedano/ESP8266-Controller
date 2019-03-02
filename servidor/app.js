//Configuración de Express y Rutas
'use strict'

//Cargamos el paquete express
const express = require('express');
//Cargamos el paquete bodyParser
const bodyParser = require('body-parser');

//Llamamos a Express
const app = express();

//Obtenemos la API de las rutas
const api = require('./routes/esp8266.route');

//Usamos BodyParser en nuestra APP
app.use(bodyParser.urlencoded({ extended: false }));
//Parseamos lo que venga por la URLENCODED en JSON
app.use(bodyParser.json());

//Las rutas estarán especificadas por el predecesor /api antes de la ruta REST
app.use('/api', api);


//Esportamos el modulo app.js
module.exports = app;