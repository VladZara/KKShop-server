const express = require('express');
const { getProducts, createProduct } = require('../controllers/product');



const router = express.Router();


router.route("/").post(createProduct);

module.exports = router;


