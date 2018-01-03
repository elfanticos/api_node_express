const pgp = require("pg-promise")();
const db  = pgp("postgres://postgres:jhonatan@localhost:5432/registro_personas");
var   app = require('./app');
var   fs  = require('fs'); 
var port = process.env.PORT || 3978;
db.connect();

app.listen(port, function() {
	console.log('Levanto correctamente el puerto '+port);
});

exports.conection = db;