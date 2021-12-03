
import {  } from '@ant-design/colors';
import 'antd/dist/antd.css';
import {Form, Row, Col, Select, Input, DatePicker, Button, Typography, Space} from 'antd'
import { useState } from 'react/cjs/react.development';
import locale from 'antd/es/date-picker/locale/es_ES';
import './ServicioSolicitud.css'

const {Item}= Form
const {Password}= Input
const {Title}= Typography

export const ServicioSolicitud = () => {

  const formSuccess = (datos) =>{
    console.log("formulario enviado", datos);
  } 
  const formFailed = (error) =>{
    console.log("error", error);
  } 
  const formItemLayout = {
    labelCol: {
      xs:{
        span: 12,
      },
      sm:{
        span:8,
      },
    },
    WrapperCol: {
      xs: {
        span: 4,
      },
      sm: {
        span:20,
      },
    },
  }  

  return (
    <div className="box">
      <Row align="middle">
       <Col xs={1} sm={2} md={6} lg={8} ></Col>
       <Col xs={22} sm={20} md={12} lg={8} >
       
         <Form name="formulario" 
          onFinish={formSuccess}
          onFinishFailed={formFailed}
          {...formItemLayout}
         >
           
           <Item>
            <Title level={2}>Reservar un servicio</Title>
           </Item>
           <Item label="Seleccione servicio"
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
           </Item>
           <Item label="Tipo de mascota"
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
          </Item>
          <Item 
            label="Nombre de la mascota">
            <Input />
          </Item>
          <Item 
            label="Seleccione la fecha"
            name="fechacita"
            rules={[
            {
              required: true,
              message: 'Porfavor, selecciona una fecha!',
            }
            ]}
          >
            <DatePicker placeholder="Seleccione la fecha de la cita" style={{width: "100%"}} locale={locale} />
          </Item>
          <Item style={{textAlign: "center"}} >
            <Button type="primary">Reservar</Button>
          </Item>
         </Form>
       </Col>
       <Col xs={1} sm={2} md={6} lg={8} ></Col>
     </Row>
    </div>
       
    
     
       
        
    )
}
