const Product = require("../models/Product");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");

exports.getProducts = asyncHandler(async (req, res, next) => {
    const products= await Product.find(req.params.id)

    if( !products) {
        return next(
            new ErrorResponse(`products not found`, 404)
          );
    } else if(products) {
        res.status(200).json({data: products});
    }
})


exports.createProduct = asyncHandler(async (req, res, next) => {
    
    const products = await Product.create(req.body);
    
  
    res.status(201).json({
      success: true,
      data: products
    });
});