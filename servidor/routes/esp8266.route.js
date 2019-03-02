'use strict'

const express = require('express');
const Esp8266Controller = require('../controllers/esp8266.controller.js');
const api = express.Router();

//Creamos las rutas
api.get('/esp8266/:id', Esp8266Controller.getEsp8266);
api.get('/allEsp8266', Esp8266Controller.getAllEsp8266);
api.post('/esp8266', Esp8266Controller.saveEsp8266);
api.put('/esp8266', Esp8266Controller.updateEsp8266);
api.delete('/esp8266/:id', Esp8266Controller.deleteEsp8266);

module.exports = api;