import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice/ui.slice';
import userReducer from './userSlice/user.slice';
import petReducer from './petSlice/pet.slice';
import veterinaryReducer from './veterinarySlice/veterinary.slice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        user: userReducer,
        pet: petReducer,
        veterinary: veterinaryReducer
    },
})