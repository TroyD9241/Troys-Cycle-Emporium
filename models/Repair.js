const { Schema, model } = require('mongoose');

const RepairsSchema = Schema({
    customerEmail: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true
    },
    repairInstructions: {
        type: String,
        required: true,
    },

    preferredContactMethod: {
        type: String,
        required: true
    },

    scheduledDate: {
        type: String,
        required: true,
    },

    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    bike: [{ type: Schema.Types.ObjectId, ref: 'Inventory' }],
    inventoryItems: [{ type: Schema.Types.ObjectId, ref: "Inventory" }]
})


module.exports = model('Repair', RepairsSchema)
