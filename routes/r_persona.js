'use strict'

var express    = require('express');
var api        = express.Router();
var controller = require('../controller/c_persona');

api.post('/getListadoPersonas',controller.getListadoPersonas);
api.post('/getPersona',        controller.findPersona);
api.post('/editPersona',       controller.editPersona);
api.post('/deletePersona',     controller.deletePersona);

module.exports = api;