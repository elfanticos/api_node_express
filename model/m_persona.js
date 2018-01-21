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

function editPersona(data,response) {
	var sql = `UPDATE personas
	              SET nombre_pers = $1,
		              ape_pater = $2,
		              ape_mater = $3,
		              nro_doc = $4,
		              fecha_nac = $5
				WHERE id = $6`;
	sql = db.pgpromise.as.format(sql,[data.nombre_pers,data.ape_pater, data.ape_mater,data.nro_doc,data.fecha_nac, data.id]);
	db.conection.query(sql)
		.then(function(data) {
			var result = {
				code : 200,
				data : 'Se editó correctamente'
			};
			response(result);
		}).catch(function(error) {
			var result = {
				code : 400,
				data : 'Error al editar'
			};
			response(result);
		});
}

function deletePesona(id,response) {
	var sql = `DELETE 
				 FROM personas
				 WHERE id = $1`;
	sql = db.pgpromise.as.format(sql,[id]);
	db.conection.query(sql)
		.then(function(data) {
			var result = {
				code : 200,
				data : 'Se eliminó exitosamente'
			};
			response(result);
		}).catch(function(error) {
			var result = {
				code : 400,
				data : 'Error al eliminar'
			};
			response(result);
		});
}

function insertPersona(data,response) {
	var sql = `INSERT 
	            INTO personas (nombre_pers, ape_pater, ape_mater, nro_doc, fecha_nac)
              VALUES ($1, $2, $3,$4,$5)`;
	sql = db.pgpromise.as.format(sql,[data.nombre_pers,data.ape_pater, data.ape_mater,data.nro_doc,data.fecha_nac]);
	db.conection.query(sql)
		.then(function(data) {
			var result = {
				code : 200,
				data : 'Se inserto correctamente'
			};
			response(result);
		}).catch(function(error) {
			var result = {
				code : 400,
				data : 'Error al insertar'
			};
			response(result);
		});
}

module.exports = {
	selectPersonas,
	editPersona,
	deletePesona,
	insertPersona
}