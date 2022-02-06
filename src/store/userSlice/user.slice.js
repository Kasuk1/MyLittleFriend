import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

//* THUNKS
export const signUp = createAsyncThunk(
    'user/signUp',
    (data) => MyLittleFriendAPI.signUp(data)
);

export const signIn = createAsyncThunk(
    'user/signIn',
    (data) => MyLittleFriendAPI.signIn(data)
);

export const getPets = createAsyncThunk(
    'user/getPets',
    (userId) => MyLittleFriendAPI.getPetsByUserId(userId)
);

export const getUserCardData = createAsyncThunk(
    'user/getUserCardData',
    (userId) => MyLittleFriendAPI.getUserCardData(userId)
);

//* SLICE DEFINITION
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(window.localStorage.getItem('user')) || null,
        signUpState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        signInState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        getPetsState: {
            loading: false,
            error: false,
            message: '',
            status: ''
        },
        getUserCardData: {
            loading: false,
            error: false,
            message: '',
            status: ''
        }
    },
    reducers: {
        logout(state) {
            state.user = null;
            window.localStorage.clear();
        },
        resetUserMethodsMessage(state, action) {
            state[action.payload].message = '';
            state[action.payload].status = '';
        }
    },
    extraReducers:
        (builder) => {
            builder
                //* Sign Up Method Thunk */
                .addCase(signUp.pending, (state) => {
                    state.signUpState.loading = true;
                    state.signUpState.error = false;
                })
                .addCase(signUp.fulfilled, (state, action) => {
                    state.signUpState.loading = false;
                    state.signUpState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.signUpState.message = 'Este email ya ha sido registrado 😔.';
                        state.signUpState.status = 'Failed';
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.signUpState.message = 'Usuario registrado con éxito. Porfavor revise su email para confirmarlo 😊.';
                        state.signUpState.status = 'OK';
                        return;
                    }
                })
                .addCase(signUp.rejected, (state) => {
                    state.signUpState.loading = false;
                    state.signUpState.error = true;
                })
                //* Sing In User Method Thunk */
                .addCase(signIn.pending, (state) => {
                    state.signInState.loading = true;
                    state.signInState.error = false;
                })
                .addCase(signIn.fulfilled, (state, action) => {
                    state.signInState.loading = false;
                    state.signInState.error = false;
                    console.log(action.payload);

                    if (action.payload.status === 'Failed') {
                        state.user = null;
                        state.signInState.message = 'Email o contraseña incorrectos. Porfavor intente otra vez 😔.';
                        state.signInState.status = 'Failed'
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.signInState.message = 'Inicio de sesión exitoso 😊.';
                        state.signInState.status = 'OK';
                        window.localStorage.setItem('user', JSON.stringify(action.payload.data));
                        window.localStorage.setItem('token', action.payload.data.token);
                        state.user = action.payload.data;
                        return;
                    }
                })
                .addCase(signIn.rejected, (state) => {
                    state.signInState.loading = false;
                    state.signInState.error = true;
                })
                //* Get Pets Method Thunk */
                .addCase(getPets.pending, (state) => {
                    state.getPetsState.loading = true;
                    state.getPetsState.error = false;
                })
                .addCase(getPets.fulfilled, (state, action) => {
                    state.getPetsState.loading = false;
                    state.getPetsState.error = false;
                    console.log(action.payload)

                    if (action.payload.status === 'Failed') {
                        state.getPetsState.message = 'Los pets no puedieron ser listados. Porfavor intente otra vez 😔.';
                        state.getPetsState.status = 'Failed'
                    }

                    if (action.payload.message === 'Unauthorized') {
                        window.localStorage.setItem('tokenInvalid', true);
                    }

                    if (action.payload.status === 'OK') {
                        state.user.pets = action.payload.data;
                        return;
                    }
                })
                .addCase(getPets.rejected, (state, action) => {
                    state.getPetsState.loading = false;
                    state.getPetsState.error = true;
                })

                //* GetUserCardData Method Thunk */
                .addCase(getUserCardData.pending, (state) => {
                    state.getUserCardData.loading = true;
                    state.getUserCardData.error = false;
                })
                .addCase(getUserCardData.fulfilled, (state, action) => {
                    state.getUserCardData.loading = false;
                    state.getUserCardData.error = false;

                    if (action.payload.status === 'Failed') {
                        state.getUserCardData.status = 'Failed';
                        state.getUserCardData.message = 'Ocurrió un error al tratar de obtener la data 😔.';
                    }

                    if (action.payload.message === 'Unauthorized') {
                        window.localStorage.setItem('tokenInvalid', true);
                        return;
                    }

                    if (action.payload.status === 'OK') {
                        state.getUserCardData.status = 'OK';
                        state.getUserCardData.message = 'La información fue corractemente procesada 😊.';

                        state.user = {
                            ...state.user,
                            ...action.payload.data
                        }
                    }
                    console.log(action.payload)
                })
                .addCase(getUserCardData.rejected, (state) => {
                    state.getUserCardData.loading = false;
                    state.getUserCardData.error = true;
                })
        }
})

export const { logout, resetUserMethodsMessage } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSignUpState = (state) => state.user.signUpState;
export const selectSignInState = (state) => state.user.signInState;
export const selectGetPetsState = (state) => state.user.getPetsState;
export const selectGetUserCardData = (state) => state.user.getUserCardData;

export default userSlice.reducer;
