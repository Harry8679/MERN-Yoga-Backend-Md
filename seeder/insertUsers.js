// insertUsers.js
const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const connectDB = require('./db');
const connectDB = require('../config/database');
const User = require('../models/user.model');

dotenv.config();

const insertUsers = async () => {
    try {
        await connectDB();

        const response = await axios.get('https://yoga-master-server.onrender.com/users');
        const users = response.data;

        // Convert JSON _id to ObjectId
        const formattedUsers = users.map(user => ({
            ...user,
            _id: mongoose.Types.ObjectId(user._id)
        }));

        await User.insertMany(formattedUsers);
        console.log('Users inserted successfully');
    } catch (error) {
        console.error('Error inserting users:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

insertUsers();
