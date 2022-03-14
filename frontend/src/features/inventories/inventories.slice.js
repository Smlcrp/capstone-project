import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    inventories: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})


export const {reset} = inventorySlice.actions
export default inventorySlice.reducer