import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReCAPTCHA from "react-google-recaptcha";

import { resetUserMethodsMessage, selectSignUpState, signUp } from '../../../store/userSlice/user.slice';
import "./RegistroFormulario.css";
import { SpinLoading } from '../../loading/SpinLoading/SpinLoading';

export const RegistroFormulario = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, message, status } = useSelector(selectSignUpState);

    /* FORM VALIDATIONS */
    const onFinish = (values) => {
        let avatar_url;
        if (values.avatar_url) {
            if (values.avatar_url.status !== 'removed') {
                avatar_url = values.avatar_url;
            }
        }
        const data = {
            ...values,
            avatar_url
        };
        console.log(data)
        dispatch(signUp(data));
    };
    /* FORM VALIDATIONS */

    useEffect(() => {
        if (status === 'OK') {
            setTimeout(() => {
                dispatch(resetUserMethodsMessage('signUpState'));
                navigate('/login');
            }, 3500)
        }
    }, [dispatch, status, navigate]);

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.file;
    };

    return (
        <div className="formulario-register">
            <div className='text-align-center mb-10'>
                <h1 className="heading--1 color-tertiary">Registrarse es sencillo!</h1>
                <div className="horizonal-line mb-2">
                    <i className="fas fa-bone horizontal-line--icon"></i>
                </div>
                <p className='paragraph color-paragraph'>Sé parte de una excelente comunidad. Estas a solo un par de pasos.</p>
            </div>

            <Form
                className='register-form position-relative'
                name="user-register"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    name="full_name"
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
                    <Input placeholder="Nombre" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, coloque su email!',
                        },
                    ]}
                >
                    <Input placeholder="Correo electrónico" />
                </Form.Item>
                <Form.Item
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, coloque su dirección!',
                        },
                    ]}
                >
                    <Input placeholder='Dirección' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, ingrese su contraseña!',
                        },
                        {
                            min: 8,
                            message: 'Se requiere 8 caracteres como mínimo!',
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Contraseña' />
                </Form.Item>
                <Form.Item
                    name="confirm_password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, confirme su contraseña!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Las contraseñas no coinciden!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirmar Contraseña' />
                </Form.Item>
                <Form.Item
                    name="avatar_url"
                    valuePropName="file"
                    getValueFromEvent={normFile}
                >
                    <Upload
                        listType="picture"
                        maxCount={1}
                        accept=".png,.jpeg,.jpg"
                        beforeUpload={(file) => {
                            return false;
                        }}
                    >
                        <Button icon={<UploadOutlined />}>Subir foto de perfil</Button>
                    </Upload>
                </Form.Item>

                {loading ?
                    (<SpinLoading text='Registrando usuario 🤖' />)
                    :
                    message &&
                    (<p className='error-message mb-2'>{message}</p>)
                }

                <Form.Item
                    name="norobot"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Porfavor validar el captcha!')),
                        },
                    ]}
                >
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_SITE_KEY_CAPTCHA}
                        theme='light'
                    />
                </Form.Item>

                <div className='register-form__actions'>
                    <button className="btn btn--secondary" type='submit'>
                        Registrar
                    </button>
                    <Link className='link-color-tertiary' to="/login">o Inicia sesión!</Link>
                </div>
            </Form>
        </div>
    )
}
