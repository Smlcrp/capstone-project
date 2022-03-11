const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    name: {
        type: String,
        required: [true, 'please enter a name for the inventory item']
    },
    stock: {
        type: Number,
        min: [0, 'you can not add negative inventory'],
        required: [true, 'need to know how much inventory']
    },
    price: {
        type: Number,
        min: [0, 'you can not add a negative price'],
        required: [true, 'price can not be empty']
    },
},
{
    timestamps: true,
})

const inventory = mongoose.model('Inventory', inventorySchema);
module.exports = inventory;