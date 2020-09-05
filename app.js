const express = require('express');
const app = express();
const cors = require('cors');
const maduraAPI = require('./routes/maduraAPI')

app.use(express.json());
app.use(cors());

app.use('/',maduraAPI);

app.listen('5000',() => {
    console.log('App started on port 5000')
})



