var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/cnode', function(req, res, next) {
  // res.append('Access-Control-Allow-Origin','*')
  res.send(fs.readFileSync('./routes/cnode.json').toString())
});

module.exports = router;
