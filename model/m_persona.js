'use strict'

var db = require('../index');

function selectPersonas(response) {
	var sql = `SELECT *
	             FROM personas`;
	db.conection.any(sql)
		.then(function(data) {
			response(data);

		}).catch(function(error) {

		});
}

module.exports = {
	selectPersonas 
}