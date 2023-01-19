var express = require('express');
var router = express.Router();

const EmailController = require('../controllers/EmailController');

router.get('/', EmailController.read)

module.exports = router;