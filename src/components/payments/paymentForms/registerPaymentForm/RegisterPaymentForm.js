import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, InputNumber } from 'antd';

import { registerPayment, selectPayment, selectRegisterCardState, selectRegisterPaymentState, setCurrentCard, setPaymentFormType } from '../../../../store/paymentSlice/payment.slice';
import { selectService, setServiceSelected } from '../../../../store/serviceSlice/service.slice';
import { selectUser } from '../../../../store/userSlice/user.slice';
import { setPet } from '../../../../store/petSlice/pet.slice';
import { SpinLoading } from '../../../loading/SpinLoading/SpinLoading';
import './RegisterPaymentForm.css';

export const RegisterPaymentForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id: customerId } = useSelector(selectUser)
    const { currentCard } = useSelector(selectPayment);
    const { serviceSelected } = useSelector(selectService);
    const registerCardState = useSelector(selectRegisterCardState);
    const { loading, status, message } = useSelector(selectRegisterPaymentState);

    const onFinish = (values) => {
        const finalValues = {
            ...values,
            customerId,
            cardToken: currentCard.id,
            ...serviceSelected,
            docNumber: values.docNumber.toString()
        }
        console.log(finalValues)

        dispatch(registerPayment(finalValues));
    }

    const handleCancel = () => {
        dispatch(setCurrentCard(null));
        dispatch(setServiceSelected(null));
        dispatch(setPet(null));
        dispatch(setPaymentFormType('registerCard'));
        navigate('/pets');
    }

    const handleRegresarAñadirTarjeta = () => {
        dispatch(setCurrentCard(null));
        dispatch(setPaymentFormType('registerCard'));
    }

    return (
        <Form
            className="register-payment-form position-relative"
            name="card-register-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}

        >
            <p className='link-color-tertiary cursor-pointer mb-2' onClick={handleRegresarAñadirTarjeta}>
                <i className="fas fa-arrow-left"></i> Añadir tarjeta
            </p>
            {status === 'Failed' && <p className='error-message mb-2'>{message}</p>}
            {registerCardState.status === 'OK' && <p className='error-message mb-2'>{registerCardState.message}</p>}
            <div className='register-payment-form__headers mb-3'>
                <h3 className='heading--3 color-tertiary'>Finaliza tu reserva</h3>
                <p className='paragraph color-paragraph'>
                    Llena todos los campos restantes y revisa el detalle final de
                    tu reserva 😄.
                </p>
            </div>

            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Porfavor, coloque su nombre!',
                    },
                    {
                        min: 3,
                        message: 'Porfavor, su nombre debe tener 2 caracteres como mínimo'
                    }
                ]}
            >
                <Input
                    style={{ width: '80%' }}
                    placeholder="Nombre"
                />
            </Form.Item>

            <Form.Item
                name="lastName"
                rules={[
                    {
                        required: true,
                        message: 'Porfavor, coloque su apellido!',
                    },
                    {
                        min: 3,
                        message: 'Porfavor, su apellido debe tener 2 caracteres como mínimo'
                    }
                ]}
            >
                <Input
                    style={{ width: '80%' }}
                    placeholder="Apellido"
                />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        required: true,
                        message: 'Porfavor, ingrese su email!',
                    },
                ]}
            >
                <Input
                    style={{ width: '80%' }}
                    placeholder="Email"
                />
            </Form.Item>

            <Form.Item
                name="docNumber"
                rules={[
                    {
                        required: true,
                        message: 'Porfavor, ingrese su cédula de ciudadanía!',
                    },
                ]}
            >
                <InputNumber
                    style={{ width: '20rem' }}
                    className='input--month'
                    placeholder="Cédula de ciudadanía"
                    min={10000000}
                    max={9999999999}
                    minLength={8}
                    maxLength={10}
                    controls={false}
                />
            </Form.Item>

            <div className='paragraph color-paragraph display-flex flex-column gap-1 opacity-90 mt-2'>
                <p>
                    <span className='color-tertiary'>Descripción de Servicio: </span>
                    {serviceSelected.description}
                </p>
                <p>
                    <span className='color-tertiary'>Total a pagar: </span>
                    {serviceSelected.value} {serviceSelected.currency}
                </p>
                <p>
                    <span className='color-tertiary'>Impuesto: </span>
                    {serviceSelected.tax} {serviceSelected.currency}
                </p>
                <p>
                    <span className='color-tertiary'>Impuesto base: </span>
                    {serviceSelected.taxBase} {serviceSelected.currency}
                </p>
            </div>

            {loading && <SpinLoading text='Realizando pago 🤖.' />}

            <div className='display-flex flex-wrap gap-2 mt-5'>
                <button className="btn btn--cuaternary" type='submit'>Proceder a pagar</button>
                <button className="btn btn--tertiary" onClick={handleCancel}>Cancelar</button>
            </div>
        </Form>
    );
};
