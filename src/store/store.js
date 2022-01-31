import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice/ui.slice';
import userReducer from './userSlice/user.slice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        user: userReducer,
    },
})