var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index);

router.get('/azhar', index.azhar);

module.exports = router;
