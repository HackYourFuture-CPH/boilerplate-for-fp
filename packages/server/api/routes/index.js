var express = require('express');
var router = express.Router();

const exampleResources = require('./exampleResources.router');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/exampleResources', exampleResources)

module.exports = router;
