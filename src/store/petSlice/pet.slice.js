import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

//* THUNKS
export const getPetById = createAsyncThunk(
    'pet/getPetById',
    (petId) => MyLittleFriendAPI.getPetById(petId)
)


//* SLICE DEFINITION
export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        pet: {},
        getPetByIdState: {
            loading: false,
            error: false,
            message: ''
        }
    },
    reducers: {

    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getPetById.pending, (state) => {
                    state.getPetByIdState.loading = true;
                    state.getPetByIdState.error = false;
                })
                .addCase(getPetById.fulfilled, (state, action) => {
                    state.getPetByIdState.loading = false;
                    state.getPetByIdState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.pet = null;
                        state.getPetByIdState.message = action.payload.message;
                        return;
                    }

                    state.pet = action.payload.data;
                })
                .addCase(getPetById.rejected, (state) => {
                    state.getPetByIdState.loading = false;
                    state.getPetByIdState.error = true;
                })
        }
})


export const selectPet = (state) => state.pet.pet;
export const selectGetPetByIdState = (state) => state.pet.getPetByIdState;

export default petSlice.reducer;
