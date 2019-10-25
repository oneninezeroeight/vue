var express = require('express');
var router = express.Router();
var Vue = require('vue')

const app = new Vue({
  template: `<div>yao one</div>`
})
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./routes/index.template.html', 'utf-8')
})

/* GET home page. */
router.get('/', async function (req, res, next) {
  let html = await renderer.renderToString(app)
  res.send(html);
});

module.exports = router;