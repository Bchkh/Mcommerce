const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')



const produits= require('./routes/api/produits');

const app = express();
app.use(cors());

app.use(bodyParser.json());

const db = require('./config/key').mongoURI;
mongoose.connect(db)
        .then(()=> console.log('mongodb connected ...'))
        .catch(err=> console.log(err));

app.use('/api/produits',produits);
const port = process.env.PORT|| 5000;
app.listen(port ,()=>console.log(`server started on port ${port}`))



