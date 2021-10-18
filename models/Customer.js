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

    bikes: [{ type: Schema.Types.ObjectId, ref: "Inventory" }],
    repairHistory: [{ type: Schema.Types.ObjectId, ref: "Repair" }],
})

console.log(validator.isEmail('hi@hi.com'))
module.exports = model('Customer', CustomersSchema)
