var express = require('express');
var router = express.Router();

let page = require('../controllers/page');
/* GET home page. */
router.get('/', page.landing);

router.get('/azhar', page.azhar);

router.get('/abdurrasyid', page.abdurrasyid);

module.exports = router;
