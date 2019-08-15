const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/laio', {useNewUrlParser : true});

requireDir('./src/model');

app.use('/laio', require("./src/routes"));

app.listen(9001);
