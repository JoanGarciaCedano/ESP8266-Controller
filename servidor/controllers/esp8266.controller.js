'use strict'

//Importamos el modelo de Esp8266Model
const Esp8266Model = require('../models/esp8266.model');

//Obtenemos el ESP8266 (metodo GET)
function getEsp8266(req, res){
    let EspId = req.params.id; 

    //Devolvemos la respuesta
    res.status(200).send({
        gpio01 : false,
        gpio02 : true,
        gpio03 : false,
        gpio04 : true,
        
    });
}

function getAllEsp8266(req, res) {
    Esp8266Model.find({}).sort('-esp8266_id').exec((err, allEsp8266) =>{
        if(err){
            res.status(500).send({message: 'Error al devolver los marcadores'});
        }

        if(!allEsp8266){
            res.status(404).send({message: 'No hay marcadores'});
        }

        res.status(200).send({allEsp8266});

    });
}

//Guardar un un nuevo ESP8266
function saveEsp8266(req, res){
            const nuevoEsp8266 = new Esp8266Model(req.body);

            nuevoEsp8266.save((err, esp8266Stored) => {
                if (err) {
                    console.log(err.message);
                    res.status(500).send({ message: 'Error al guardar el marcador' });
                } else {
                    res.status(200).send({ nuevoEsp8266: esp8266Stored });
                }
            });
}

//Actualizar un ESP en base de datos
function updateEsp8266(req, res){
    var params = req.body;

    res.status(200).send({
        update: true,
        esp8266_id: params
    })
}

//Borrar un ESP de la base de datos
function deleteEsp8266(req, res){
    let favoritoId = req.params.id;

    res.status(200).send({
        delete: true,
        Esp8266_id: favoritoId
    });
}


module.exports = {
    getEsp8266,
    saveEsp8266,
    updateEsp8266,
    deleteEsp8266,
    getAllEsp8266
}