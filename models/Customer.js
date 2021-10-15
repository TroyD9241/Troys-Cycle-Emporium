const { Schema, model } = require('mongoose')
const CustomersSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true,
    },
    bikes: [{ type: Schema.Types.ObjectId, ref: "Inventory" }],
    repairs: [{ type: Schema.Types.ObjectId, ref: "Repair" }],
})

module.exports = model('Customer', CustomersSchema)
