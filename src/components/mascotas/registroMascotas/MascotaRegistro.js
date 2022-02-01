import React from "react";
import { Form, Input, Button, Select, DatePicker, Upload, } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import './MascotaRegistro.css';

export const MascotaRegistro = () => {

  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className='pet-register'>
      <div className='pet-register__headers text-align-center mb-10'>
        <h1 className="heading--1 color-tertiary">Registrar mascota!</h1>
        <div className="horizonal-line mb-2">
          <i className="fas fa-bone horizontal-line--icon"></i>
        </div>
        <p className='paragraph color-paragraph'>
          Asegurate de llenar los campos requeridos en el formulario. Recuerda que mientras
          mas completa sea la información, mejor será el control de tu mascota
        </p>
      </div>

      <Form
        className='pet-register__form'
        name="pet-register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="type"
          rules={[
            {
              required: true,
              message: 'Porfavor selecciona el tipo de mascota a registrar!'
            },
          ]}
        >
          <Select placeholder='Tipo de mascota'>
            <Select.Option value="dog">Perro</Select.Option>
            <Select.Option value="cat">Gato</Select.Option>
            <Select.Option value="rabbit">Conejo</Select.Option>
            <Select.Option value="other">Otro</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'El nombre es requerido!'
            },
          ]}
        >
          <Input placeholder="Nombre de la mascosta" />
        </Form.Item>
        <Form.Item name="birthdate">
          <DatePicker style={{ width: '100%' }} placeholder="Fecha de nacimiento" />
        </Form.Item>
        <Form.Item name="detail">
          <Input.TextArea placeholder="Descripción de la mascota" />
        </Form.Item>

        <Form.Item
          name="avatar_url"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra=""
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Subir foto de mascota</Button>
          </Upload>
        </Form.Item>

        <button className='btn btn--secondary' type='submit'>Registrar</button>

      </Form>
    </div>
  );
};
