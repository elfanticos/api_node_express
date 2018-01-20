'use strict'

var m_persona = require('../model/m_persona');

function getListadoPersonas(req, res) {
	m_persona.selectPersonas(null,function(data) {
		res.status(200).send(data);
	});
}

function findPersona(req,res) {
	var params = req.body;
	m_persona.selectPersonas(params.id,function(data) {
		res.status(200).send({data});
	});
}

function editPersona(req, res) {
	var params = req.body;
	if(params.id != null) {
		m_persona.editPersona(params,function(data) {
			res.status(200).send({data});
		});
	}else {
		res.status(200).send({data:'No se puede editar.', code:200});
	}
}

function deletePersona(req, res) {
	var params = req.body;
	if(params.id != null) {
		m_persona.deletePesona(params.id,function(data) {
			res.status(200).send({data});
		});
	}else {
		res.status(200).send({data:'Error al eliminar.', code:200});
	}
}

module.exports = {
	getListadoPersonas,
	findPersona,
	editPersona,
	deletePersona
}