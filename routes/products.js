const express = require('express');
const { getProducts,getProduct, createProduct } = require('../controllers/product');



const router = express.Router();


router.route("/").get(getProducts).post(createProduct);
router.route('/:id').get(getProduct)

module.exports = router;


