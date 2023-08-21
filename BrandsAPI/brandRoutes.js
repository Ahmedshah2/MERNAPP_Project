const app = require('express')
const router = app.Router()

const { createBrand, getAllBrands } = require('./controller')

router.post('/createbrand', createBrand)
router.get('/getallbrands', getAllBrands)

module.exports = router