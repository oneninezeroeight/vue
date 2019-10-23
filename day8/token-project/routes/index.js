var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function (req, res, next) {
  let {
    username,
    password
  } = req.body
  let info = {
    username,
    password
  }
  const token = Buffer.from(JSON.stringify(info)).toString('base64')
  console.log(req.body)
  res.send(token)
});

router.post('/autologin', function (req, res, next) {
  let {
    token
  } = req.body
  const info = Buffer.from(token, 'base64').toString('utf8')
  res.send(info?'1':'0')
});

module.exports = router;