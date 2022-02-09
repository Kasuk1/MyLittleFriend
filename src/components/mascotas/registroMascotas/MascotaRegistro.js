import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, DatePicker, Upload, } from "antd";
import { UploadOutlined } from '@ant-design/icons';

import { SpinLoading } from "../../loading/SpinLoading/SpinLoading";
import { ButtonRegresar } from "../../globales/buttons/ButtonRegresar/ButtonRegresar";
import { selectUser } from "../../../store/userSlice/user.slice";
import { registerPet, resetPetMethodsMessage, selectRegisterPetState } from "../../../store/petSlice/pet.slice";
import './MascotaRegistro.css';

export const MascotaRegistro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: owner } = useSelector(selectUser);
  const { loading, message, status } = useSelector(selectRegisterPetState);

  const onFinish = async (values) => {
    let avatar_url;
    if (values.avatar_url) {
      if (values.avatar_url.status !== 'removed') {
        avatar_url = values.avatar_url;
      }
    }
    const data = {
      ...values,
      birthdate: values.birthdate.toString(),
      owner,
      avatar_url
    };
    dispatch(registerPet(data));
  };

  useEffect(() => {
    if (status === 'OK') {
      setTimeout(() => {
        dispatch(resetPetMethodsMessage('registerPetState'));
        navigate(-1);
      }, 2000);
    }
  }, [dispatch, status, navigate])

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.file;
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
        className='pet-register__form position-relative'
        name="pet-register"
        initialValues={{}}
        onFinish={onFinish}
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
            <Select.Option value="hamster">Hamster</Select.Option>
            <Select.Option value="bird">Ave</Select.Option>
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
            <Button icon={<UploadOutlined />}>Subir imagen de mascota</Button>
          </Upload>
        </Form.Item>

        {loading ?
          (<SpinLoading text='Registrando mascota 🐾' />)
          :
          message &&
          (<p className='error-message mb-2'>{message}</p>)
        }

        <div className='display-flex gap-2 flex-wrap justify-content-center mt-5'>
          <button className='btn btn--secondary' type='submit'>Registrar</button>
          <ButtonRegresar />
        </div>

      </Form>
    </div>
  );
};
