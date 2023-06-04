const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const paiements= require('./routes/api/paiements');


const app = express();
app.use(cors());
app.use(bodyParser.json());



app.use('/api/paiements',paiements);
const port = process.env.PORT|| 5001;
app.listen(port ,()=>console.log(`server started on port ${port}`))
