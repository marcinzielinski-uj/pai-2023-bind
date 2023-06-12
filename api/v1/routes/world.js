var express = require('express');
var router = express.Router();

const worldController = require('../controllers/worldController');

/* GET users listing. */
router.get('/', worldController.getIndex);
router.get('/city', worldController.getCities);

module.exports = router;
