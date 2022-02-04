import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
    },
    reducers: {

    }
})


export const selectUiState = (state) => state.ui;

export default uiSlice.reducer;
