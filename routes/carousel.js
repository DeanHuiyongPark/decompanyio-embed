let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('carousel', { title: 'carousel' });
});


module.exports = router;
