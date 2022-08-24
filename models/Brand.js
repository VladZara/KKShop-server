import {Schema, model} from ("mongoose");

const BrandSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    }
});

export default model("Brand", BrandSchema);