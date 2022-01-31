import { createSlice } from '@reduxjs/toolkit';

const initialState = {

}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setButton(state) {

        }
    },
})

export const { setButton } = uiSlice.actions;

export default uiSlice.reducer;
