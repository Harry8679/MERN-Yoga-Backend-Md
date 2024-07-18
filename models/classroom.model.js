// models/classroom.model.js
const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructorName: {
        type: String,
        required: true
    },
    instructorEmail: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['approved', 'pending', 'rejected']  // Assuming these statuses, you can adjust as needed
    },
    submitted: {
        type: Date,
        required: true
    },
    totalEnrolled: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        default: null
    }
}, { timestamps: true });

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
