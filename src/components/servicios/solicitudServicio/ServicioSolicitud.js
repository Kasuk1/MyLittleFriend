import { Form, Select, Input, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/es_ES';
import './ServicioSolicitud.css'

export const ServicioSolicitud = () => {

  const formSuccess = (datos) => {
    console.log("formulario enviado", datos);
  }
  const formFailed = (error) => {
    console.log("error", error);
  }

  return (
    <div className="formulario-service-request">

      <div className='text-align-center mb-10'>
        <h1 className="heading--1 color-tertiary">Reserva la cita<br /> que tu mascota necesita!</h1>
        <div className="horizonal-line mb-2">
          <i className="fas fa-bone horizontal-line--icon"></i>
        </div>
        <p className='paragraph color-paragraph'>Asegurate de colocar tus datos correctamente en el formulario antes de loguearte.</p>
      </div>

      <Form
        className="service-request-form"
        name="service-request-form"
        onFinish={formSuccess}
        onFinishFailed={formFailed}
        initialValues={{
          remember: true,
        }}
      >

        <Form.Item
          name="servicio"
          rules={[
            {
              required: true,
              message: 'Porfavor, escoja un servicio!',
            },
          ]}
        >

          <Select name="servicio" placeholder="Selecciona un servicio">
            <Select.Option value="1">Consulta médica</Select.Option>
            <Select.Option value="2">Limpieza mascota</Select.Option>
            <Select.Option value="3">Corte y masajes</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
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

        {/* Aqui debemos instanciar el id de la mascota y ocultarlo, ademas el
         nombre de pet con el input deshabilitado */}
        <Form.Item
          name="name"
        >
          <Input placeholder='Nombre de la mascota' />
        </Form.Item>

        <Form.Item
          name="date"
          rules={[
            {
              required: true,
              message: 'Porfavor, selecciona una fecha!',
            }
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Fecha de la cita"
            locale={locale}
          />
        </Form.Item>

        <button className="btn btn--secondary" type='submit'>
          Reservar
        </button>

      </Form>
    </div>





  )
}