var express = require('express');
var router = express.Router();
const sass= require('node-sass'); // We're adding the node-sass module
const path    = require('path'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Star Wars' });
});

router.get('/nosotros', function(req, res, next) {
  res.render('pages/nosotros', { title: 'Nosotros' });
});

 
module.exports = router;
