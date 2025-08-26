const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        match: [/^\S+@\S+\.\S+$/, "please enter a valid email address"]
    },
    password: {
        type: String, 
        required: true, 
        minlength: 12, 
        match: [/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])\S{8,64}$/, "password must be at least 12 char"]
    },
    region: String,
    address: String,
    phone: Number,
    role: {
        type: String, 
        enum: ["patient", "pharmacy", "admin"], 
        required: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;