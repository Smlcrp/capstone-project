import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import inventoryService from "./inventories.service";
import { useDispatch } from "react-redux";




const initialState = {
    inventories: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create New Inventory Item
export const createInventory = createAsyncThunk('inventory/create', async (inventoryData, thunkAPI) => {
    try {
        console.log(inventoryData)
        const token = thunkAPI.getState().auth.user.token
        return await inventoryService.createInventory(inventoryData, token)
    } catch (error) {
        console.log(inventoryData)
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get user Inventory
export const getInventory = createAsyncThunk('inventory/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(token)
        return await inventoryService.getInventory(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

// Get a user Inventory Item
export const getInventoryItem = createAsyncThunk('inventory/getOne', async (id, thunkAPI) => {
    
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(token)
        return await inventoryService.getInventoryItem(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

// Delete Inventory Item
export const deleteInventory = createAsyncThunk('inventory/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(id)
        return await inventoryService.deleteInventory(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update Inventory Item
export const updateInventory = createAsyncThunk('inventory/update', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await inventoryService.updateInventory(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createInventory.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.inventories.push(action.payload) 
            })
            .addCase(createInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getInventory.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.inventories = action.payload 
               console.log(action.payload)
            })
            .addCase(getInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getInventoryItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getInventoryItem.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.inventories = action.payload 
               console.log(action.payload)
            })
            .addCase(getInventoryItem.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteInventory.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.inventories = state.inventories.filter((inventory) => inventory._id !== action.payload._id)
               console.log(action.payload) 
               console.log(state.inventories)
            })
            .addCase(deleteInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateInventory.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
               state.inventories = action.payload 
            })
            .addCase(updateInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const {reset} = inventorySlice.actions
export default inventorySlice.reducer