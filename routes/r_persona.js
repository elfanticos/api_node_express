'use strict'

var express    = require('express');
var api        = express.Router();
var controller = require('../controller/c_persona');

api.post('/getListadoPersonas',controller.getListadoPersonas);

module.exports = api;