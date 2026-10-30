
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    profile: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "UserProfile",
    },
    
},
{ timestamp: true},
);

const User = mongoose.model("User", userSchema);
module.exports = User;