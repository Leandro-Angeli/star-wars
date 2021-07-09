var express = require('express');

var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Star Wars' });
});

router.get('/nosotros',  (req, res, next) => {
  
    res.render('pages/nosotros', { title: 'Nosotros' });
  

  
});

 
module.exports = router;
