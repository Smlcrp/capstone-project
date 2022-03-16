import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';

import inventoryReducer from '../features/inventories/inventories.slice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    inventories: inventoryReducer,
  }
});
