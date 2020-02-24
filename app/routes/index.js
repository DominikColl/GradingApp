const router = require('express').Router()
const controller = require('../controller')
router.get('/', controller.landing)
router.post('/', controller.createProduct)
module.exports = router;