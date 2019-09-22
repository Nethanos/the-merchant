const {connectDB } = require('./database');
const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

const PORT = 9003;

app.use(cors()); 

app.use(express.json())

connectDB();

requireDir('./src/model');

app.use('/themerchant', require("./src/routes"));

app.listen(PORT, () => {
    console.log(`themerchant running on port ${PORT}`)
});

