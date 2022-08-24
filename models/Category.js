import {Schema, model} from "mongoose";
import mongoose from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    language: {
        type: String,
        required: false
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
},{
    toJSON:{ virtuals: true},
    toObject:{virtuals:true}
});


// Reverse populate with virtuals
CategorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'category',
    justOne: false
})

export default model("Category", CategorySchema);