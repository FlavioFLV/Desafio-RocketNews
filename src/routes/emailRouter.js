var express = require('express');
var router = express.Router();

const EmailController = require('../controllers/EmailController');

router.get('/', EmailController.read)
router.get('/page/:page', EmailController.read);
router.get('/page/:page/delete/:id', EmailController.delete);

module.exports = router;