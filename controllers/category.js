import Category from "../models/Category.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middleware/async.js";
import Product from "../models/Product.js";

//get all categories
export const getCategories = asyncHandler(async (req, res, next) => {
    const categories = await Category.find(req.params.id)

    if(!categories) {
        return next(
            new ErrorResponse(`categories not found`, 404)
        );
    } else if(categories) {
        res.status(200).json({data: categories});
    }
})

// get single category
export const getCategory = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id)

    if (!category) {
        return next(
            new ErrorResponse(`No category with the id of ${req.params.id}`, 404)
        )
    }

    res.status(200).json({
        success: true,
        data: category
    })
})

// add new category
export const createCategory = asyncHandler(async (req, res, next) => {

    const category = await Category.create(req.body);

    res.status(201).json({
        success: true,
        data: category
    });
});

//delete category
export const deleteCategory = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id);

    if (!category){
        return res.status(400).json({success:false});
    }

    category.remove();

    res.status(200).json({success:true, data: {}});
})