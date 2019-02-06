'use strict'

//Cargamos el paquete express
var express = require('express');
//Cargamos el paquete bodyParser
var bodyParser = require('body-parser');

//Llamamos a Express
var app = express();
var port = process.env.PORT || 3000;

//Usamos BodyParser en nuestra APP
app.use(bodyParser.urlencoded({extended:false}));

//Parseamos lo que venga por la URLENCODED en JSON
app.use(bodyParser.json());

//Creamos el servidor
app.listen(port, () =>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
    console.log("Nodemon funcionando");
});
