import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice/ui.slice';
import userReducer from './userSlice/user.slice';
import paymentReducer from './paymentSlice/payment.slice';
import petReducer from './petSlice/pet.slice';
import veterinaryReducer from './veterinarySlice/veterinary.slice';
import serviceReducer from './serviceSlice/service.slice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        user: userReducer,
        payment: paymentReducer,
        pet: petReducer,
        veterinary: veterinaryReducer,
        service: serviceReducer
    },
})