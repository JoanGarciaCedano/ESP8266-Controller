'use strict'

//Cargamos el paquete express
var express = require('express');
//Llamamos a Express
var app = express();
var port = 3000;
//Creamos el servidor
app.listen(port, () =>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
