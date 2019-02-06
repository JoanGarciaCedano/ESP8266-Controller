# ESP8266-Controller

## Servidor

**1.- Carpeta del Proyecto**

```
Se crea carpeta del proyecto llamada: Proyecto - ESP8266 - Controller

```

**2.- Carpeta server**

```
Se crea carpeta server en donde se instala Express JS

_Express JS.- es suna infraestructura de aplicacioens web Node.js m�nima y flexible que proporciona un conjunto s�lido
de caracter�sticas para las aplicaciones web y m�viles _

```

**3.- Se crea el servidor conectado con Expressjs**

```
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


```

**4.- Instalamos BodyParser y Nodemon**

```
BodyParser.- Es usado para parsear los datos que lleguen al servidor en formato POST, es un middleware que se ejecuta justo antes de correr el c�digo en Node.js

Nodemon.- Es una herramienta que nos permite recargar el servicio automaticamente, creando un script llamado "start" : "nodemon index.js" dentro del package.json

```