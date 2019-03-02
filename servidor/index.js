'use strict'

//Cargamos mongoose como ORM
const mongoose =  require('mongoose');

//Cargamos el contenido de app.js
const app = require('./app')

//Definimos el puerto dinamicamente para la ejecución del servidor
const port = process.env.PORT || 3000;

//Conectamos la base de datos a la aplicación
mongoose.connect('mongodb://localhost:27017/esp8266_database', { useNewUrlParser: true, useCreateIndex: true }, (err, res) =>{

      if(err){
        throw err;
      }else{
        console.log("Base de datos Mongo conectada via Mongoose");
        //Creamos el servidor
        app.listen(port, () => {
          console.log(`Servidor ejecutandose en http://localhost:${port}`);
          console.log("Nodemon funcionando");
        });
      }

});
