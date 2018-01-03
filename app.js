var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var cors       = require('cors');
var r_persona = require('./routes/r_persona');

app.use(cors());
app.use('',r_persona);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
