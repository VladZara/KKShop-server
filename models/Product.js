const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Product", ProductSchema);