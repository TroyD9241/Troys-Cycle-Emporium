// require statements
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc')

// initializations
const swaggerUi = require('swagger-ui-express')
const routes = require('./routes');
const port = 3000;
const app = express();
require('dotenv/config');

// express configs
app.set('json replacer', (key, value) => {
    // undefined values are set to 'null'
    if (typeof value === "undefined") {
        return null
    }
    return value
})

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


// middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors())
app.use(morgan())
app.use(express.json())
app.use(routes)

// Basic error handling middleware
app.use((request, response, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
})

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message
        }
    })
})

// Connect to DB
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.DB_CONNECTION, () => {
        console.log('connected to the database!')
    })
}

// start the app
app.listen(port, () => {
    console.log(`listening on port:${port}`)
})
