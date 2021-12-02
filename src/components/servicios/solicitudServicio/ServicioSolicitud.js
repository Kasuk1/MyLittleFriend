
import {  } from '@ant-design/colors';
import 'antd/dist/antd.css';
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Typography,
    
  } from 'antd';
import { useState } from 'react/cjs/react.development';
  
const {Title} = Typography
export const ServicioSolicitud = () => {
  const uploadButton = (
    <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);
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
    
    return (
      <Row align="center" className="formulario-registro">
        <Col lg={6}>
        <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 48,
        }}
        initialValues={{
            remember: true,
        }}
        // ref={formRef}
        // {...formItemLayout}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        >
        <Title level={2}>Reservar un servicio</Title>
        <Form.Item 
          label="Seleccione servicio"
          name="servicio"
          rules={[
            {
                required: true,
                message: 'Porfavor, escoja un servicio!',
            },
          ]}
        >
          <Select placeholder="Selecciona un servicio">
            <Select.Option value="1">Consulta médica</Select.Option>
            <Select.Option value="2">Limpieza mascota</Select.Option>
            <Select.Option value="3">Corte y masajes</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item 
          label="Tipo de mascota"
          name="tipo"
          rules={[
            {
                required: true,
                message: 'Porfavor, seleccione tipo de mascota!',
            },
          ]}
        >
          <Select placeholder="Tipo de mascota">
            <Select.Option value="1">Perro</Select.Option>
            <Select.Option value="2">Gato</Select.Option>
            <Select.Option value="3">Hamster</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item 
        label="Nombre de la mascota">
          <Input />
      </Form.Item>
      <Form.Item 
        label="Seleccione la fecha"
        name="fechacita"
        rules={[
          {
              required: true,
              message: 'Porfavor, selecciona una fecha!',
          }
        ]}
        {...tailFormItemLayout}
      >
        <DatePicker  />
      </Form.Item>
      <Form.Item label="     ">
        <Button type="primary">Reservar</Button>
      </Form.Item>
    </Form>   
        </Col>
      </Row>
        
    )
}
