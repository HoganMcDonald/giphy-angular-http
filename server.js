//requires
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var path = require('path');
var index = require('./modules/index');

//globals
var port = process.env.PORT || 7575;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);

//listen
app.listen(port, function() {
  console.log('in server:' + port);
});
