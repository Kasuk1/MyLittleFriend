import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

export const requestService = createAsyncThunk(
    'service/requestService',
    (data) => MyLittleFriendAPI.requestService(data)
);

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        serviceSelected: null,
        requestServiceState: {
            loading: false,
            error: false,
            status: '',
            message: ''
        }
    },
    reducers: {
        setServiceSelected(state, action) {
            state.serviceSelected = action.payload;
        },
        resetServiceMethods(state, action) {
            state[action.payload].status = '';
            state[action.payload].message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestService.pending, (state) => {
                state.requestServiceState.loading = true;
                state.requestServiceState.error = false;
            })
            .addCase(requestService.fulfilled, (state, action) => {
                state.requestServiceState.loading = false;
                state.requestServiceState.error = false;

                if (action.payload.status === 'Failed') {
                    state.requestServiceState.status = 'Failed';
                    state.requestServiceState.message = 'No se logró reservar la cita 😔.'
                }
                if (action.payload.message === 'Unauthorized') {
                    window.localStorage.setItem('tokenInvalid', true);
                    return;
                }
                if (action.payload.status === 'OK') {
                    state.requestServiceState.status = 'OK';
                    state.requestServiceState.message = 'Su cita ha sido reservada 😊';
                }
            })
            .addCase(requestService.rejected, (state) => {
                state.requestServiceState.loading = false;
                state.requestServiceState.error = true;
            })
    }
})


export const { setServiceSelected, resetServiceMethods } = serviceSlice.actions;

export const selectService = (state) => state.service;
export const selectRequestServiceState = (state) => state.service.requestServiceState;

export default serviceSlice.reducer;
