const {Schema, model} = require("mongoose");

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
    }
});

module.exports = model("Category", CategorySchema);