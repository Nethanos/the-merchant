const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

const PORT = 9003;

const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    auth: {
        authdb: 'admin'
    }
}

app.use(cors()); 



app.use(express.json())
mongoose.connect('mongodb://admin:root@localhost:27017/admin', MONGOOSE_OPTIONS, (error) => {
    if(error){
        console.error(error);
    }
});

requireDir('./src/model');

app.use('/themerchant', require("./src/routes"));

app.listen(PORT, () => {
    console.log(`themerchant running on port ${PORT}`)
});
