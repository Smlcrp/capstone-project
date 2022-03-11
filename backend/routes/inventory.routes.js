const express = require('express');
const router = express.Router();
const { createInventory, getInventory, getInventoryItem, updateInventory, deleteInventory } = require('../controllers/inventory.controller');

// create route
router.post('/', createInventory)

// get all inventory route
router.get('/', getInventory)

// get 1 inventory item route
router.get('/:id', getInventoryItem)

// update inventory item route
router.put('/:id', updateInventory)

// delete inventory item route
router.delete('/:id', deleteInventory)


module.exports = router;