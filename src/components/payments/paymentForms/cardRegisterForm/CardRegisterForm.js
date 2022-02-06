import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, InputNumber } from 'antd';

import chipCard from '../../../../assets/chipcard.png';
import { registerCard, selectRegisterCardForm, selectRegisterCardState, setRegisterCardFormValues } from '../../../../store/paymentSlice/payment.slice';
import { selectUser } from '../../../../store/userSlice/user.slice';
import './CardRegisterForm.css'
import { SpinLoading } from '../../../loading/SpinLoading/SpinLoading';


export const CardRegisterForm = () => {
    const dispatch = useDispatch();
    const registerCardFormValues = useSelector(selectRegisterCardForm);
    const { loading, message } = useSelector(selectRegisterCardState);
    const { id: customerId, customerPaymentId } = useSelector(selectUser);

    const onFinish = () => {
        const newValues = {};
        for (let val in registerCardFormValues) {
            newValues[val] = registerCardFormValues[val].toString();
        }
        console.log(newValues)
        dispatch(registerCard({
            ...newValues,
            customerId,
            customerPaymentId
        }));
    };

    return (
        <Form
            className="card-register-form position-relative"
            name="card-register-form"
            initialValues={{
                remember: true,
            }}
            onValuesChange={nameValue => dispatch(setRegisterCardFormValues(nameValue))}
            onFinish={onFinish}
        >
            {message && <p className='color-paragraph'>{message}</p>}
            <div className="card-register-form__card-design">
                <div className='card-register-form__primary'>
                    <img className='card__chip' src={chipCard} alt='' />
                    <Form.Item
                        className='card-register-form__input'
                        name="number"
                        rules={[
                            {
                                type: "number",
                                required: true,
                                message: 'Porfavor, ingrese el número de su tarjeta',
                            },
                        ]}
                    >
                        <InputNumber
                            className='input--card-number'
                            placeholder='4575623182290326'
                            minLength={16}
                            maxLength={16}
                            controls={false}
                        />
                    </Form.Item>
                </div>

                <div className='card-register-form__secondary'>
                    <div className='card-register-form__expiration'>
                        <Form.Item
                            className='card-register-form__input'
                            name="month"
                            rules={[
                                {
                                    type: 'number',
                                    required: true,
                                    message: '',
                                },
                            ]}
                        >
                            <InputNumber
                                className='input--month'
                                placeholder='MES'
                                min={1}
                                max={12}
                                formatter={value => `${(value > 0 && value < 10) ? '0' : ''}${value}`}
                                controls={false}
                            />
                        </Form.Item>

                        <Form.Item
                            className='card-register-form__input'
                            name="expYear"
                            rules={[
                                {
                                    type: 'number',
                                    required: true,
                                    message: '',
                                },
                            ]}
                        >
                            <InputNumber
                                className='input--year'
                                placeholder='AÑO'
                                min={new Date().getFullYear()}
                                max={new Date().getFullYear() + 5}
                                controls={false}
                            />
                        </Form.Item>
                    </div>


                    <Form.Item
                        className='card-register-form__input'
                        name="cvc"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: '',
                            },
                        ]}
                    >
                        <InputNumber
                            className='input--cvc'
                            placeholder='CVC'
                            min={100}
                            max={999}
                            controls={false}
                        />
                    </Form.Item>
                </div>

                <p className='card-register-form__type-card'>VISA</p>

            </div>

            {loading && <SpinLoading text='Registrando tarjeta 🤖.' />}

            <button className="btn btn--secondary" type='submit'>Añadir tarjeta</button>

        </Form>
    );
};
