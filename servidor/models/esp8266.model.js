'use strict'

const mongoose = require('mongoose');
//Cargamos el esquema de mongoose (Objetos de tipo Schema)
const Schema = mongoose.Schema;

const Esp8266Schema = Schema({
    esp8266_id : { type: String, unique : true },
    usuario : String,
    password: String,
    gpio01: Boolean,
    gpio02: Boolean,
    gpio03: Boolean,
    gpio04: Boolean
});

module.exports = mongoose.model('Esp8266Model', Esp8266Schema, 'allEsp8266');