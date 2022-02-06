import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MyLittleFriendAPI } from '../../services/MyLittleFriendAPI/MyLittleFriendAPI';

export const registerCard = createAsyncThunk(
    'payment/registerCard',
    (data) => MyLittleFriendAPI.registerCard(data)
);

export const registerPayment = createAsyncThunk(
    'payment/registerPayment',
    (data) => MyLittleFriendAPI.registerPayment(data)
);

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        formType: 'registerCard',
        currentCard: null,
        registerCardForm: {
            number: '',
            expYear: '',
            month: '',
            cvc: ''
        },
        registerCardState: {
            loading: false,
            error: false,
            status: '',
            message: ''
        },
        registerPaymentState: {
            loading: false,
            error: false,
            status: '',
            message: ''
        }
    },
    reducers: {
        setPaymentFormType(state, action) {
            state.formType = action.payload;
        },
        setRegisterCardFormValues(state, action) {
            state.registerCardForm = {
                ...state.registerCardForm,
                ...action.payload
            }
        },
        setRegisterPaymentFormValues(state, action) {
            state.registerPaymentForm = {
                ...state.registerPaymentForm,
                ...action.payload
            }
        },
        resetPaymentMethods(state, action) {
            state[action.payload].status = '';
            state[action.payload].message = '';
        },
        setCurrentCard(state, action) {
            state.currentCard = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            //* RegisterCard Method Thunk*/
            .addCase(registerCard.pending, (state) => {
                state.registerCardState.loading = true;
                state.registerCardState.error = false;
            })
            .addCase(registerCard.fulfilled, (state, action) => {
                state.registerCardState.loading = false;
                state.registerCardState.error = false;

                if (action.payload.status === 'Failed') {
                    state.registerCardState.status = 'Failed';
                    state.registerCardState.message = 'No se logró registrar la tarjeta 😔.'
                }
                if (action.payload.message === 'Unauthorized') {
                    window.localStorage.setItem('tokenInvalid', true);
                    return;
                }

                if (action.payload.status === 'Ok') {
                    state.registerCardState.status = 'OK';
                    state.registerCardState.message = 'Tarjeta correctamente registrada 😊';
                    state.currentCard = action.payload.data;
                    state.formType = 'registerPayment';
                }
            })
            .addCase(registerCard.rejected, (state) => {
                state.registerCardState.loading = false;
                state.registerCardState.error = true;
            })

            //* RegisterPayment Method Thunk*/
            .addCase(registerPayment.pending, (state) => {
                state.registerPaymentState.loading = true;
                state.registerPaymentState.error = false;
            })
            .addCase(registerPayment.fulfilled, (state, action) => {
                state.registerPaymentState.loading = false;
                state.registerPaymentState.error = false;

                if (action.payload.status === 'Failed') {
                    state.registerPaymentState.status = 'Failed';
                    state.registerPaymentState.message = 'No se logró realizar el pago 😔.'
                }
                if (action.payload.message === 'Unauthorized') {
                    window.localStorage.setItem('tokenInvalid', true);
                    return;
                }
                if (action.payload.status === 'Ok') {
                    state.registerPaymentState.status = 'OK';
                    state.registerPaymentState.message = 'Pago correctamente realizado 😊';
                    state.formType = 'registerCard';
                }
                console.log(action.payload)
            })
            .addCase(registerPayment.rejected, (state) => {
                state.registerPaymentState.loading = false;
                state.registerPaymentState.error = true;
            })
    }
});

export const {
    setPaymentFormType,
    setRegisterCardFormValues,
    setRegisterPaymentFormValues,
    resetPaymentMethods,
    setCurrentCard
} = paymentSlice.actions;

export const selectPayment = (state) => state.payment;
export const selectRegisterCardForm = (state) => state.payment.registerCardForm;
export const selectRegisterCardState = (state) => state.payment.registerCardState;
export const selectRegisterPaymentForm = (state) => state.payment.registerPaymentForm;
export const selectRegisterPaymentState = (state) => state.payment.registerPaymentState;

export default paymentSlice.reducer;
