// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'instructor', 'admin']  // Assuming these roles, you can adjust as needed
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    skills: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
