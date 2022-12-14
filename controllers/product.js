import Product from "../models/Product.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middleware/async.js";


//get all products
export const getProducts = asyncHandler(async (req, res, next) => {
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
export const getProduct = asyncHandler(async (req, res, next) => {
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
export const createProduct = asyncHandler(async (req, res, next) => {
    
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
});

//update product
export const updateProduct = asyncHandler(async (req,res,next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.id}`, 404)
        );
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        data: product
    });

});

//delete product
export const deleteProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product){
        return res.status(400).json({success:false});
    }

    product.remove();

    res.status(200).json({success:true, data: {}});
})