import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

import "./LoginFormulario.css";

export const LoginFormulario = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row className="formulario-login" justify="center" align="middle" >
            <Col>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
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
                            No soy un robot
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Ingresar
                        </Button>
                        o <Link to="/registro">Registrate ahora!</Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}
