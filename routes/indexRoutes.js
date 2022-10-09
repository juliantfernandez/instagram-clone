let express = require('express');
let router = express.Router();

let indexController = require('../controllers/indexController')

router.get('/', indexController.feed)

module.exports = router;