const router = require('express').Router()
const controller = require('../controller')
router.get('/', controller.landing)
router.post('/', controller.createProduct)
router.get('/delete/:id', controller.deleteStudent)
router.get('/update/:id', controller.renderUpdateForm)
router.post('/update/:id', controller.updateStudent)
module.exports = router;