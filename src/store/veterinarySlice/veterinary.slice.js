import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

//* THUNKS
export const getVeterinaries = createAsyncThunk(
    'veterinary/getVeterinaries',
    MyLittleFriendAPI.getVeterinaries
);

export const getVeterinaryById = createAsyncThunk(
    'veterinary/getVeterinaryById',
    (veterinaryId) => MyLittleFriendAPI.getVeterinaryById(veterinaryId)
);

//* SLICE DEFINITION
export const veterinarySlice = createSlice({
    name: 'veterinary',
    initialState: {
        veterinaries: null,
        veterinary: null,
        getVeterinariesState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        getVeterinaryByIdState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        }
    },
    reducers: {
        resetVeterinaryMethodsMessage(state, action) {
            state[action.payload].message = '';
            state[action.payload].status = '';
        }
    },
    extraReducers:
        (builder) => {
            builder
                //* GetVeterinaries Method Thunk */
                .addCase(getVeterinaries.pending, (state) => {
                    state.getVeterinariesState.loading = true;
                    state.getVeterinariesState.error = false;
                })
                .addCase(getVeterinaries.fulfilled, (state, action) => {
                    state.getVeterinariesState.loading = false;
                    state.getVeterinariesState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.pet = null;
                        state.getVeterinariesState.message = 'Ocurrió un error al tratar de obtener las veterinarias 😔.';
                        return;
                    }

                    state.veterinaries = action.payload.data;
                })
                .addCase(getVeterinaries.rejected, (state) => {
                    state.getVeterinariesState.loading = false;
                    state.getVeterinariesState.error = true;
                })
                //* getVeterinaryById Method Thunk */
                .addCase(getVeterinaryById.pending, (state) => {
                    state.getVeterinaryByIdState.loading = true;
                    state.getVeterinaryByIdState.error = false;
                })
                .addCase(getVeterinaryById.fulfilled, (state, action) => {
                    state.getVeterinaryByIdState.loading = false;
                    state.getVeterinaryByIdState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.getVeterinaryByIdState.message = 'Ocurrió un error al tratar de obtener la veterinaria 😔.';
                        state.getVeterinaryByIdState.status = 'Failed';
                        return;
                    }

                    state.veterinary = action.payload.data;
                })
                .addCase(getVeterinaryById.rejected, (state) => {
                    state.getVeterinaryByIdState.loading = false;
                    state.getVeterinaryByIdState.error = true;
                })
        }
})

export const { resetVeterinaryMethodsMessage } = veterinarySlice.actions;

export const selectVeterinaries = (state) => state.veterinary.veterinaries;
export const selectVeterinary = (state) => state.veterinary.veterinary;
export const selectGetVeterinariesState = (state) => state.veterinary.getVeterinariesState;
export const selectGetVeterinaryByIdState = (state) => state.veterinary.getVeterinaryByIdState;

export default veterinarySlice.reducer;
