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

export const updatePetById = createAsyncThunk(
    'pet/updatePetById',
    (data) => MyLittleFriendAPI.updatePetById(data)
)

export const deletePetById = createAsyncThunk(
    'pet/deletePetById',
    (petId) => MyLittleFriendAPI.deletePetById(petId)
)

//* SLICE DEFINITION
export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        pet: null,
        getPetByIdState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        registerPetState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        updatePetState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        deletePetState: {
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
        },
        setPet(state, action) {
            state.pet = action.payload;
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
                    }
                    if (action.payload.message === 'Unauthorized') {
                        window.localStorage.setItem('tokenInvalid', true);
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.getPetByIdState.message = 'El pet fue exitosamente encontrado 😊.';
                        state.getPetByIdState.status = 'OK';
                        state.pet = action.payload.data;
                        return;
                    }

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
                    }
                    if (action.payload.message === 'Unauthorized') {
                        window.localStorage.setItem('tokenInvalid', true);
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


                //* UpdatePet Method Thunk */
                .addCase(updatePetById.pending, (state) => {
                    state.updatePetState.loading = true;
                    state.updatePetState.error = false;
                })
                .addCase(updatePetById.fulfilled, (state, action) => {
                    state.updatePetState.loading = false;
                    state.updatePetState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.updatePetState.message = 'Ocurrió un error al tratar de actualizar el pet 😔.';
                        state.updatePetState.status = 'Failed';
                    }
                    if (action.payload.message === 'Unauthorized') {
                        window.localStorage.setItem('tokenInvalid', true);
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.updatePetState.message = 'El pet fue exitosamente actualizado 😊.';
                        state.updatePetState.status = 'OK';
                        return;
                    }
                })
                .addCase(updatePetById.rejected, (state) => {
                    state.updatePetState.loading = false;
                    state.updatePetState.error = true;
                })

                //* DeletePetById Method Thunk */
                .addCase(deletePetById.pending, (state) => {
                    state.deletePetState.loading = true;
                    state.deletePetState.error = false;
                })
                .addCase(deletePetById.fulfilled, (state, action) => {
                    state.deletePetState.loading = false;
                    state.deletePetState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.deletePetState.status = 'Failed';
                        state.deletePetState.message = 'Ocurrió un error al tratar de eliminar el pet 😔.';
                    }
                    if (action.payload.message === 'Unauthorized') {
                        window.localStorage.setItem('tokenInvalid', true);
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.deletePetState.status = 'OK';
                        state.deletePetState.message = 'El pet fue exitosamente eliminado 😊.';
                        state.pet = null;
                        return;
                    }

                })
                .addCase(deletePetById.rejected, (state) => {
                    state.deletePetState.loading = false;
                    state.deletePetState.error = true;
                })
        }
})

export const { resetPetMethodsMessage, setPet } = petSlice.actions;

export const selectPet = (state) => state.pet.pet;
export const selectGetPetByIdState = (state) => state.pet.getPetByIdState;
export const selectRegisterPetState = (state) => state.pet.registerPetState;
export const selectUpdatePetState = (state) => state.pet.updatePetState;
export const selectDeletePetState = (state) => state.pet.deletePetState;

export default petSlice.reducer;
