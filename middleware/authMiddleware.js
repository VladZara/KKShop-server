import jwt from 'jsonwebtoken'
import asyncHandler from "./async.js";
import ErrorResponse from "../utils/errorResponse.js";
import User from '../models/User.js';

//protect routes
export const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1]
    } 
    // else if(req.cookies.token) {
    //     token = req.cookies.token
    // }


    //make sure token exists
    if(!token) {
        return next(new ErrorResponse('Not authorize to access this route', 401))
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);
        next()
    } catch (error) {
        return next(new ErrorResponse('Not authorize to access this route', 401))
    }
})

export const authorize = (role) => {
    return (req, res, next) => {
        if( !(role === req.user.role) ) {
            return next(new ErrorResponse(`User Role ${req.user.role} is not authorized to access this route`, 403))
        }
    }
}