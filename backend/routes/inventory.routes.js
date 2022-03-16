const express = require('express');
const router = express.Router();
const { createInventory, getInventory, getInventoryItem, updateInventory, deleteInventory } = require('../controllers/inventory.controller');
const {protect} = require('../middleware/auth.middleware');

// get all inventory route
router.get('/', protect, getInventory)

// create route
router.post('/', protect, createInventory)

// get 1 inventory item route
router.get('/:id', protect, getInventoryItem)

// update inventory item route
router.put('/:id', protect, updateInventory)

// delete inventory item route
router.delete('/:id', protect, deleteInventory)


module.exports = router;