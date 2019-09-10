const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

const port = process.env.PORT || 9002

app.use(cors()); 

const uri = "mongodb+srv://apsn:root@laio-vppds.mongodb.net/laio?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true }).then( console.log("connected"));


app.use(express.json())

requireDir('./src/model');

app.use('/laio', require("./src/routes"));

app.listen(port, () => {
    console.log(`Lai.io rodando na porta ${port}`)
});
