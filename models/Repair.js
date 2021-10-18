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

    ScheduledDate: {
        type: Date,
        required: true,
        default: Date.now(),

    },

    customer: [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
    bike: [{ type: Schema.Types.ObjectId, ref: 'Inventory' }]
})


module.exports = model('Repair', RepairsSchema)
