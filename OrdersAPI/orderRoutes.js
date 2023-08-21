const app = require('express')
const router = app.Router()
const { placeOrder, getallOrders, trackOrder } = require('./controller')

router.post('/placeorder', placeOrder)
router.get('/getallorders', getallOrders)
router.get('/trackorder/:_id', trackOrder)


module.exports = router