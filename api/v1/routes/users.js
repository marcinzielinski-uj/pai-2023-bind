var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.getIndex);
router.get('/allUsers', userController.getUsers);

module.exports = router;
