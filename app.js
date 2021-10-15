const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

require('dotenv/config');
// express configs

const routes = require('./routes');
const port = 3000;

// middlewares


// swagger
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Bicycle Shop API",
            version: "1.0.0",
            description: "Please use at your own pace "
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: [`./routes/api/customersRoutes.js`, `./routes/api/inventoryRoutes.js`, './routes/api/repairsRoutes.js']
};
const specs = swaggerJsDoc(options)

const app = express();

// middlewares

app.set('json replacer', (key, value) => {
    // undefined values are set to 'null'
    if (typeof value === "undefined") {
        return null
    }
    return value
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors())
app.use(express.json())
app.use(routes)
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to database!')
})


app.listen(port, () => {
    console.log(`listening on port:${port}`)
})
