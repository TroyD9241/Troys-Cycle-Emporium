const { Schema, model } = require('mongoose')

const CustomersSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type: String,
        required: true,
        max: 15
    },

    bikes: [{ type: Schema.Types.ObjectId, ref: "Inventory" }],
    repairHistory: [{ type: Schema.Types.ObjectId, ref: "Repair" }],
})

module.exports = model('Customer', CustomersSchema)
