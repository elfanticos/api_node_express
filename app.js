var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var cors       = require('cors');

//CARGAR RUTAS
var r_persona = require('./routes/r_persona');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CONFIGURAR CABECERAS HTTP
app.use(cors());

//RUTAS BASE

app.use('',r_persona);
module.exports = app;
