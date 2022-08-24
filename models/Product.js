import mongoose from 'mongoose';
const { Schema, model} = mongoose;


const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please add the price']
    },
    discount: {
        type: Number,
        required: false
    },
    details: {
        type: Object,
        required: true,
        effect: String,
        careType: String,
        weight: Number,
        volume: Number,
        country: String
    },
    count: {
        type: Number,
        required: true,
    },
    usage: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default model("Product", ProductSchema);