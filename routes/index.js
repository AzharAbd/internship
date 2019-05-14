var express = require('express');
var router = express.Router();

let page = require('../controllers/page');
/* GET home page. */
router.get('/', page.landing);
router.get('/azhar', page.azhar);
router.get('/submit', page.v2);

// router.post('/', page.submit_lead);

module.exports = router;
