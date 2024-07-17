const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('Hello every developer');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
