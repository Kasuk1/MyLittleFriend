import { Form, Input, Button, Checkbox, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';

import { Row, Col } from 'antd';
import { beforeUpload, getBase64 } from '../../../util/functions/UploadImage';
import { useState } from 'react';

import "./RegistroFormulario.css";

export const RegistroFormulario = () => {

    const [state, setState] = useState({
        loading: false,
    });


    /* UPLOAD IMAGE */
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    const { loading, imageUrl } = state;
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    /* UPLOAD IMAGE */



    /* FORM VALIDATIONS */
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    /* FORM VALIDATIONS */


    /* Responsiveness */
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    /* Responsiveness */


    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <Row align="center" className="formulario-registro">
            <Col span={18} lg={6}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nombres"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, coloque un nombre!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Apellidos"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, coloque un apellido!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, coloque su email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Dirección"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, coloque su dirección!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Porfavor, ingrese su contraseña!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Confirmar Contraseña"
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
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Subir foto"
                        name="avatar"
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra=""
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
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
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            No soy un robot
                        </Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Registrar
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>


    )
}
