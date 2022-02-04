import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

//* THUNKS
export const getPetById = createAsyncThunk(
    'pet/getPetById',
    (petId) => MyLittleFriendAPI.getPetById(petId)
);

export const registerPet = createAsyncThunk(
    'pet/registerPet',
    (data) => MyLittleFriendAPI.registerPet(data)
);

//* SLICE DEFINITION
export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        pet: null,
        getPetByIdState: {
            loading: false,
            error: false,
            message: ''
        },
        registerPetState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        }
    },
    reducers: {
        resetPetMethodsMessage(state, action) {
            state[action.payload].message = '';
            state[action.payload].status = '';
        }
    },
    extraReducers:
        (builder) => {
            builder
                //* GetPetById Method Thunk */
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
                        state.getPetByIdState.message = 'Ocurrió un error al tratar de obtener el pet 😔.';
                        return;
                    }

                    state.pet = action.payload.data;
                })
                .addCase(getPetById.rejected, (state) => {
                    state.getPetByIdState.loading = false;
                    state.getPetByIdState.error = true;
                })
                //* RegisterPet Method Thunk */
                .addCase(registerPet.pending, (state) => {
                    state.registerPetState.loading = true;
                    state.registerPetState.error = false;
                })
                .addCase(registerPet.fulfilled, (state, action) => {
                    state.registerPetState.loading = false;
                    state.registerPetState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.registerPetState.message = 'Ocurrió un error al tratar de registrar el pet 😔.';
                        state.registerPetState.status = 'Failed';
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.registerPetState.message = 'El pet fue exitosamente registrado 😊.';
                        state.registerPetState.status = 'OK';
                        return;
                    }
                })
                .addCase(registerPet.rejected, (state) => {
                    state.registerPetState.loading = false;
                    state.registerPetState.error = true;
                })
        }
})

export const { resetPetMethodsMessage } = petSlice.actions;

export const selectPet = (state) => state.pet.pet;
export const selectGetPetByIdState = (state) => state.pet.getPetByIdState;
export const selectRegisterPetState = (state) => state.pet.registerPetState;

export default petSlice.reducer;
