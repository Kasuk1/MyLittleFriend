import "./MascotaRegistro.css";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Typography, Upload, Modal,Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const MascotaRegistro = () => {
  const { Title } = Typography;
  const layout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailLayout = {
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
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const [images, setImages] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [ {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    }],
  });
  const { previewVisible, previewImage, fileList, previewTitle } = images;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleCancel = () => {
    setImages({ previewVisible: false });
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setImages({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  const handleChange = ({ fileList }) => {
    setImages({ fileList });
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
  <Row justify="center" align="middle">
  <Col>
    <Form
      {...layout}
      name="registro-mascotas"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Title level={2}>Registro de Mascosta</Title>
      <Form.Item 
      name="tipoMascota"
      label="Tipo de mascota"
      rules={[
        {
          required: true,
        },
      ]}
      >
        <Select>
          <Select.Option value="Perro">Perro</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="nombreMascota"
        label="Nombre de la Mascosta"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
      name="fechaNacimiento"
      label="Fecha de Nacimiento"
      >
        <DatePicker />
      </Form.Item>
      <Form.Item name="Detalles" label="Detalles">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
      {...tailLayout}
      label="Subir Imagen"
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};
