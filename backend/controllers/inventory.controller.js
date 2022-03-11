const asyncHandler = require('express-async-handler');

// @desc  Create Inventory Items
// @route  POST /api/inventory
const createInventory = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'create inventory item'})
})

// @desc  Get Inventory Items
// @route  GET /api/inventory
const getInventory = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get inventory'})
})

// @desc  Get 1 Inventory Item
// @route  GET /api/inventory/:id
const getInventoryItem = asyncHandler(async (req, res) => {
    res.status(200).json({message: `get inventory item ${req.params.id}`})
})

// @desc  Update 1 Inventory Item
// @route  PUT /api/inventory/:id
const updateInventory = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please input text')
    }

    res.status(200).json({message: `update inventory item ${req.params.id}`})
})

// @desc  Delete 1 Inventory Item
// @route  DELETE /api/inventory/:id
const deleteInventory = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete inventory item ${req.params.id}`})
})



module.exports = {
    createInventory,
    getInventory,
    getInventoryItem,
    updateInventory,
    deleteInventory,
}