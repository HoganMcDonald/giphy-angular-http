//requires
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

//get
router.get('/', function(req, res) {
  console.log('hit base URL');
  res.sendFile(path.resolve('public/views/index.html'));
});


module.exports = router;
