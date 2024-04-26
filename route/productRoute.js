const route = require('express').Router()

const {getProduct} = require('../controller/productController')

route.get('/',getProduct)

module.exports = route 