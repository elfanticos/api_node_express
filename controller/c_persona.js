'use strict'

var m_persona = require('../model/m_persona');

function getListadoPersonas(req, res) {
	console.log('llego a la funcion');
	m_persona.selectPersonas(function(data) {
		res.status(200).send(data);
	});
}

module.exports = {
	getListadoPersonas
}