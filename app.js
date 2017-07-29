var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var etablissementRouter = require('./routers/etablissement');

var app = express();

var PORT = 80;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'resultat';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', etablissementRouter);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
