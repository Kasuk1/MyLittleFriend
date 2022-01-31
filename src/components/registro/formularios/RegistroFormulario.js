import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import "./RegistroFormulario.css";

export const RegistroFormulario = () => {

    /* FORM VALIDATIONS */
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    /* FORM VALIDATIONS */

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
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
                className='register-form'
                name="user-register"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, coloque un nombre!',
                        },
                    ]}
                >
                    <Input placeholder="Nombres" />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, coloque un apellido!',
                        },
                    ]}
                >
                    <Input placeholder="Apellidos" />
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
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, confirma tu contraseña!',
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
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra=""
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Subir foto de perfil</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="norobot"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Debe marcar esta casilla')),
                        },
                    ]}
                >
                    <Checkbox>
                        <span className='color-paragraph'>
                            No soy un robot
                        </span>
                    </Checkbox>
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
