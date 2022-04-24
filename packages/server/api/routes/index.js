var express = require('express');
var router = express.Router();

const helloRouter = require('./exampleResource.router');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/example', exampleRouter)

module.exports = router;
