import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

//* THUNKS
export const signIn = createAsyncThunk(
    'user/signIn',
    (credentials) => MyLittleFriendAPI.signIn(credentials)
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {

        },
        signInState: {
            loading: false,
            error: false,
        }
    },
    reducers: {
        getUser(state) {

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
                    console.log(action.payload)
                })
                .addCase(signIn.rejected, (state) => {
                    state.signInState.loading = false;
                    state.signInState.error = true;
                })
        }
})

export const { getUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSignInState = (state) => state.user.signInState;

export default userSlice.reducer;
