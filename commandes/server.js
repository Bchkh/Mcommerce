const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const commandes= require('./routes/api/commandes');


const app = express();
app.use(cors());

app.use(bodyParser.json());




app.use('/api/commandes',commandes);
const port = process.env.PORT|| 5010;
app.listen(port ,()=>console.log(`server started on port ${port}`))