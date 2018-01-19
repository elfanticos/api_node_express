'use strict'

var db = require('../index');

function selectPersonas(id =null,response) {
	var sql = `SELECT id,
				      nombre_pers,
				      ape_mater,
					  ape_pater,
					  nro_doc,
					  TO_CHAR(fecha_nac,'dd/mm/yyyy') as fecha_nac
				 FROM personas
				WHERE id = COALESCE($1,id)
			 ORDER BY id ASC`;
    sql = db.pgpromise.as.format(sql,[id]);
	db.conection.any(sql)
		.then(function(data) {
			var result = {
				code : 200,
				data : data
			};
			response(result);
		}).catch(function(error) {
			var result = {
				code : 400,
				data : data
			};
			response(result);
		});
}

module.exports = {
	selectPersonas 
}