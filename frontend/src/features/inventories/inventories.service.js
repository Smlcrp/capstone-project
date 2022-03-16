import axios from 'axios';


const API_URL = '/api/inventory/'


// Create new inventory item
const createInventory = async (inventoryData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, inventoryData, config)

    return response.data
}

// Get user inventory
const getInventory = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL,  config)

    return response.data
}

// Get a user inventory item
const getInventoryItem = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + inventoryId,  config)

    return response.data
}

// Delete Inventory Item
const deleteInventory = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + inventoryId, config)

    return response.data
}

// Update Inventory Item
const updateInventory = async (inventoryId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(inventoryId)
    const response = await axios.put(API_URL + inventoryId.id, inventoryId, config)

    return response.data
}

const inventoryService = {
    createInventory,
    getInventory,
    getInventoryItem,
    deleteInventory,
    updateInventory,
}

export default inventoryService;