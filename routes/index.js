var express = require('express');
var router = express.Router();

let page = require('../controllers/page');
const db = require('../controllers/query');
/* GET home page. */
router.get('/', page.landing);

// router.get('/result', page.show_result);
router.get('/result', db.checkKey );



module.exports = router;
