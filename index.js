const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

const port = process.env.PORT || 4001;

// Connectez-vous à MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Hello every developer');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
