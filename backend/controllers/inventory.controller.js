const asyncHandler = require('express-async-handler');

const Inventory = require('../models/inventory.model');
const User = require('../models/user.model');

// @desc  Create Inventory Items
// @route  POST /api/inventory
const createInventory = asyncHandler(async (req, res) => {
    if(!req.body.name || !req.body.stock || !req.body.price) {
        res.status(400)
        throw new Error('Please fill out all fields')
    }

    const inventory = await Inventory.create({
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price,
        user: req.user.id
    })
    res.status(200).json(inventory)
})

// @desc  Get Inventory Items
// @route  GET /api/inventory
const getInventory = asyncHandler(async (req, res) => {
    const inventory = await Inventory.find()//{ user: req.user.id })

    res.status(200).json(inventory)
})

// @desc  Get 1 Inventory Item
// @route  GET /api/inventory/:id
const getInventoryItem = asyncHandler(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id)

    res.status(200).json(inventory)
})

// @desc  Update 1 Inventory Item
// @route  PUT /api/inventory/:id
const updateInventory = asyncHandler(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id)

    if(!inventory) {
        res.status(400)
        throw new Error('Inventory not found')
    }

    // const user = await User.findById(req.user.id)

    // // Check for user
    // if(!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // // make sure the login user matches the inventory user
    // if(inventory.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }


    const updateInventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateInventory)
})

// @desc  Delete 1 Inventory Item
// @route  DELETE /api/inventory/:id
const deleteInventory = asyncHandler(async (req, res) => {
    const inventory = await Inventory.findById(req.params.id)

    if(!inventory) {
        res.status(400)
        throw new Error('Inventory not found')
    }

    // const user = await User.findById(req.user.id)

    // // Check for user
    // if(!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // // make sure the login user matches the inventory user
    // if(inventory.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }


    const deletedInventory = await Inventory.findByIdAndRemove(req.params.id, req.body)
    res.status(200).json(`Deleted ${inventory}`)
})



module.exports = {
    createInventory,
    getInventory,
    getInventoryItem,
    updateInventory,
    deleteInventory,
}