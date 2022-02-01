import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

//* THUNKS
export const signIn = createAsyncThunk(
    'user/signIn',
    (credentials) => MyLittleFriendAPI.signIn(credentials)
)

export const getPets = createAsyncThunk(
    'user/getPets',
    (userId) => MyLittleFriendAPI.getPetsByUserId(userId)
)

//* SLICE DEFINITION
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(window.localStorage.getItem('user')) || null,
        signInState: {
            loading: false,
            error: false,
            message: ''
        },
        getPetsState: {
            loading: false,
            error: false,
            message: ''
        }
    },
    reducers: {
        getUser(state) {

        },
        logout(state) {
            state.user = null;
            window.localStorage.clear();
        }
    },
    extraReducers:
        (builder) => {
            builder
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
                        state.signInState.message = action.payload.message;
                        return;
                    }

                    window.localStorage.setItem('user', JSON.stringify(action.payload.data));
                    window.localStorage.setItem('token', action.payload.data.token);
                    state.user = action.payload.data;
                })
                .addCase(signIn.rejected, (state) => {
                    state.signInState.loading = false;
                    state.signInState.error = true;
                })
                .addCase(getPets.pending, (state) => {
                    state.getPetsState.loading = true;
                    state.getPetsState.error = false;
                })
                .addCase(getPets.fulfilled, (state, action) => {
                    state.getPetsState.loading = false;
                    state.getPetsState.error = false;

                    state.user.pets = action.payload.data;
                })
                .addCase(getPets.rejected, (state, action) => {
                    state.getPetsState.loading = false;
                    state.getPetsState.error = true;
                })
        }
})

export const { getUser, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSignInState = (state) => state.user.signInState;
export const selectGetPetsState = (state) => state.user.getPetsState;

export default userSlice.reducer;
