var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users preferences. */
router.get('/preferences', function(req, res, next) {
  res.send('<h2>preferences</h2>');
});

module.exports = router;
