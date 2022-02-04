import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showVeterinaryCardServices: false
    },
    reducers: {
        setShowVeterinaryCardServices(state) {
            state.showVeterinaryCardServices = !state.showVeterinaryCardServices;
        }
    }
})

export const { setShowVeterinaryCardServices } = uiSlice.actions;

export const selectUiState = (state) => state.ui;

export default uiSlice.reducer;
