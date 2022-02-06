import { createSlice } from "@reduxjs/toolkit";


export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        serviceSelected: null
    },
    reducers: {
        setServiceSelected(state, action) {
            state.serviceSelected = action.payload;
        }
    }
})


export const { setServiceSelected } = serviceSlice.actions;

export const selectService = (state) => state.service;

export default serviceSlice.reducer;
