const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');
const routes = require('./routes');
const port = 3000;

app.set('json replacer', (key, value) => {
    // undefined values are set to 'null'
    if (typeof value === "undefined") {
        return null
    }
    return value
})
app.use(express.json())
app.use(routes)

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to database!')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`listening on port:${port}`)
})
