'use strict'

var m_persona = require('../model/m_persona');

function getListadoPersonas(req, res) {
	m_persona.selectPersonas(null,function(data) {
		res.status(200).send(data);
	});
}

function findPersona(req,res) {
	var params = req.body;
	console.log(params);
	res.status(200).send({});
}

module.exports = {
	getListadoPersonas,
	findPersona
}