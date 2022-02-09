import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CardList } from '../cardList/CardList';
import { CardRegisterForm } from '../paymentForms/cardRegisterForm/CardRegisterForm';
import { RegisterPaymentForm } from '../paymentForms/registerPaymentForm/RegisterPaymentForm';
import { resetServiceMethods, selectRequestServiceState, selectService, setServiceSelected } from '../../../store/serviceSlice/service.slice';
import { selectPet, setPet } from '../../../store/petSlice/pet.slice';
import { resetPaymentMethods, selectPayment, selectRegisterCardState, selectRegisterPaymentState, setCurrentCard } from '../../../store/paymentSlice/payment.slice';
import './Payment.css';

export const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { serviceSelected } = useSelector(selectService);
    const pet = useSelector(selectPet);
    const { formType } = useSelector(selectPayment);
    const registerCardState = useSelector(selectRegisterCardState);
    const registerPaymentState = useSelector(selectRegisterPaymentState);
    const requestServiceState = useSelector(selectRequestServiceState);

    useEffect(() => {
        if (registerCardState.status) {
            setTimeout(() => {
                dispatch(resetPaymentMethods('registerCardState'));
            }, 4000)
        }
    }, [dispatch, registerCardState]);

    useEffect(() => {
        if (registerPaymentState.status) {
            setTimeout(() => {
                dispatch(resetPaymentMethods('registerPaymentState'));
            }, 4000)
        }
    }, [dispatch, registerPaymentState])

    useEffect(() => {
        if (requestServiceState.status) {
            setTimeout(() => {
                dispatch(resetServiceMethods('requestServiceState'));
            }, 4000)
        }
    }, [dispatch, requestServiceState])

    useEffect(() => {
        if (requestServiceState.status === 'OK') {
            dispatch(setCurrentCard(null));
            dispatch(setServiceSelected(null));
            dispatch(setPet(null));
            navigate('/pets');
        }
    }, [dispatch, requestServiceState, navigate])

    return (
        <div className='payment--container'>
            <div className='payment'>
                <div className='payment--headers'>
                    <div >
                        <h1 className='heading--2 color-tertiary'>Realizar pago</h1>
                        <div className="horizonal-line mb-2">
                            <i className="fas fa-bone horizontal-line--icon"></i>
                        </div>
                    </div>

                    <p className='color-paragraph'>
                        Estas a punto de realizar el pago de
                        <span className='paragraph color-tertiary'> {serviceSelected?.service} </span>
                        para tu pequeño
                        <span className='paragraph color-tertiary'> {pet?.name}</span>.
                        <br />
                        Recuerda que puedes seleccionar una de tus tarjetas o
                        agregar una nueva para realizar el pago correspondiente.
                    </p>
                </div>

                <div className='payment--list'>
                    <CardList />
                    {formType === 'registerCard' && <CardRegisterForm />}
                    {formType === 'registerPayment' && <RegisterPaymentForm />}
                </div>


            </div>
        </div>
    )
};
