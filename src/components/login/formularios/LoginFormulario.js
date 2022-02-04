import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { selectSignInState, signIn } from '../../../store/userSlice/user.slice';
import "./LoginFormulario.css";
import { SpinLoading } from '../../loading/SpinLoading/SpinLoading';

export const LoginFormulario = () => {
    const dispatch = useDispatch();
    const { loading, message } = useSelector(selectSignInState);

    const onFinish = (values) => {
        const { email, password } = values;
        dispatch(signIn({ email, password }));
    };

    return (
        <div className="formulario-login" >
            <div className='text-align-center mb-10'>
                <h1 className="heading--1 color-tertiary">Inicia sesión ya, <br /> tu mascota te necesita!</h1>
                <div className="horizonal-line mb-2">
                    <i className="fas fa-bone horizontal-line--icon"></i>
                </div>
                <p className='paragraph color-paragraph'>Asegurate de colocar tus datos correctamente en el formulario antes de loguearte.</p>
            </div>


            <Form
                className="login-form position-relative"
                name="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
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
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Porfavor, ingrese su contraseña!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Contraseña"
                    />
                </Form.Item>

                {loading ?
                    (<SpinLoading text='Iniciando sesión 🤖' />)
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

                <div className='login-form__actions color-tertiary'>
                    <button className="btn btn--secondary" type='submit'>Ingresar</button>
                    <Link className='link-color-tertiary' to="/register">o Registrate ahora!</Link>
                </div>
            </Form>
        </div>
    );
}
