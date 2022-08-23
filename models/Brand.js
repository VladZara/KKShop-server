const {Schema, model} = require("mongoose");

const BrandSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    }
});

module.exports = model("Brand", BrandSchema);