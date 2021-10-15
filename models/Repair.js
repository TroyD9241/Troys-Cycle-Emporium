const { Schema, model } = require('mongoose');

const RepairsSchema = Schema({
    customerEmail: {
        type: String,
        required: true,
        unique: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    scheduledDate: {
        type: Date,
        default: Date.now,
        required: true,
    },

    repairInstructions: {
        type: String,
        required: true,
    },

    preferredContactMethod: {
        type: String,
        required: true
    },
    bike: {
        type: Schema.Types.ObjectId, ref: 'Inventory'
    }
})

module.exports = model('Repair', RepairsSchema)
