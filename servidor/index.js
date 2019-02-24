'use strict'

//Cargamos el paquete express
const express = require('express');
//Cargamos el paquete bodyParser
const bodyParser = require('body-parser');

//Llamamos a Express
const app = express();
const port = process.env.PORT || 3000;

//Usamos BodyParser en nuestra APP
app.use(bodyParser.urlencoded({extended:false}));

//Parseamos lo que venga por la URLENCODED en JSON
app.use(bodyParser.json());

//Creamos las rutas
app.get('/prueba/:nombre?', (req, res) =>{   

   const { nombre = 'SIN NOMBRE' } = req.params;
    res.status(200).json({
      data: [2, 3, 4],
      mensaje: `respuesta de URL /prueba ${nombre}`
    });
});



//Creamos el servidor
app.listen(port, () =>{
    console.log(`Servidor ejecutandose en http://localho|st:${port}`);
    console.log("Nodemon funcionando");
});

