const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();


const routes = require('./routes');
const port = 3000;

app.use(routes)
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to database!')
})

app.listen(port, () => {
    console.log(`listening on port:${port}`)
})
