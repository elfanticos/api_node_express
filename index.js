const pgpromise = require("pg-promise")();
const db  = pgpromise("postgres://postgres:postgres@localhost:5433/registro_personas");
var   app = require('./app');
var   fs  = require('fs'); 
var port = process.env.PORT || 3978;
db.connect();

app.listen(port, function() {
	console.log('Levanto correctamente el puerto '+port);
});

exports.conection = db;
exports.pgpromise = pgpromise;