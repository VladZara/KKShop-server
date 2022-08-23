const Product = require("../models/Product");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");


//get all products
exports.getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find(req.params.id)

    if(!products) {
        return next(
            new ErrorResponse(`products not found`, 404)
          );
    } else if(products) {
        res.status(200).json({data: products});
    }
})

// get single product
exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.id}`, 404)
        )
    }

    res.status(200).json({
        success: true,
        data: product
    })
})


// add new product
exports.createProduct = asyncHandler(async (req, res, next) => {
    
    const products = await Product.create(req.body);
    
  
    res.status(201).json({
      success: true,
      data: products
    });
});