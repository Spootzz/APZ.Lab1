require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(process.env.RESPONSE_TEXT || 'Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});