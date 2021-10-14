const mongoose = require('mongoose');

const CustomersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Customers', CustomersSchema)
