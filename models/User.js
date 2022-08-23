const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String,
        required: [true, "Please enter a email address"],
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "  Please enter a valid email address",
        ]
    },
    role: {
        type: String,
        enum: ['user', 'publisher', "admin"],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model('User', UserSchema);
