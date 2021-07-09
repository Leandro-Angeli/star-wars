var express = require('express');
var router = express.Router();
const api = require('../bin/api');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Star Wars' });
});

router.get('/nosotros', async (req, res, next) => {
  const testFunc = await api.test();
   res.render('pages/nosotros', { title: 'Nosotros',testFunc });
  
});

 
module.exports = router;
