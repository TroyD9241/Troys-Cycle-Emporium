const { Schema, model } = require('mongoose')
const validator = require('validator')

const CustomersSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'invalid email']
    },

    phoneNumber: {
        type: String,
        required: true,
        max: 15
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    bikes: [{ type: Schema.Types.ObjectId, ref: "Inventory" }],
    repairHistory: [{ type: Schema.Types.ObjectId, ref: "Repair" }],
})

module.exports = model('Customer', CustomersSchema)
