import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, DatePicker, Cascader } from 'antd';
import locale from 'antd/es/date-picker/locale/es_ES';

import { ButtonRegresar } from '../../globales/buttons/ButtonRegresar/ButtonRegresar';
import { SpinLoading } from '../../loading/SpinLoading/SpinLoading';
import { selectPet } from '../../../store/petSlice/pet.slice';
import { getVeterinaries, selectGetVeterinariesState, selectVeterinaries } from '../../../store/veterinarySlice/veterinary.slice';
import './ServicioSolicitud.css'
import { setServiceSelected } from '../../../store/serviceSlice/service.slice';

export const ServicioSolicitud = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pet = useSelector(selectPet);
  const veterinaries = useSelector(selectVeterinaries);
  const { loading } = useSelector(selectGetVeterinariesState);
  const [servicePrice, setServicePrice] = useState(0);

  const handleCascaderChange = (values) => {
    let servicePrice;
    for (let vet of veterinaries) {
      for (let serv of vet.services) {
        if (serv._id === values[1]) {
          servicePrice = serv.price;
        }
      }
    }

    setServicePrice(servicePrice ? servicePrice : 0)
  }

  const options = veterinaries?.map(vet => {
    return {
      value: vet._id,
      label: vet.name,
      children: vet.services.map(serv => {
        return {
          value: serv._id,
          label: serv.name,
        }
      })
    }
  })

  const formSuccess = (datos) => {
    const { date, service } = datos;
    let serviceSelected;
    let veterinarySelectedName;
    for (let vet of veterinaries) {
      if (vet._id === service[0]) {
        veterinarySelectedName = vet.name;
      }
      for (let serv of vet.services) {
        if (serv._id === service[1]) {
          serviceSelected = { ...serv };
        }
      }
    }

    const data = {
      date,
      veterinary: service[0],
      pet: pet._id,
      attendance_detail: serviceSelected.detail,
    }
    console.log("formulario enviado", data);

    dispatch(setServiceSelected({
      bill: serviceSelected._id,
      description: `${serviceSelected.name} - ${veterinarySelectedName}`,
      value: (serviceSelected.price).toString(),
      currency: 'COP',
      dues: '1',
      ip: '190.000.000.000',
      docType: 'CC',
      tax: (serviceSelected.price - Math.floor(serviceSelected.price / 1.19)).toString(),
      taxBase: (Math.floor(serviceSelected.price / 1.19)).toString()
    }))

    navigate('payment');
  }

  useEffect(() => {
    dispatch(getVeterinaries());
  }, [dispatch]);

  return (
    <div className="formulario-service-request">
      <div className='text-align-center mb-10'>
        <h1 className="heading--1 color-tertiary">
          Estas a punto de reservar<br /> una cita para {pet?.name}!
        </h1>
        <div className="horizonal-line mb-2">
          <i className="fas fa-bone horizontal-line--icon"></i>
        </div>
        <p className='paragraph color-paragraph'>
          Asegurate de colocar los datos correctamente en el formulario antes de hacer la reserva.
        </p>
      </div>

      {veterinaries && (
        <Form
          className="service-request-form position-relative"
          name="service-request-form"
          onFinish={formSuccess}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="service"
            rules={[
              {
                required: true,
                message: 'Porfavor, debes seleccionar un servicio!',
              }
            ]}
          >
            <Cascader
              options={options}
              placeholder="Selecciona el servicio"
              onChange={handleCascaderChange}
            />
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

          {loading &&
            (
              <SpinLoading text='Cargando veterinarias disponibles' />
            )
          }

          <div className='total-price display-flex justify-content-between mb-5'>
            <p className='paragraph color-paragraph'>Total:</p>
            <p className='paragraph color-paragraph'>{servicePrice} COP</p>
          </div>

          <div className='display-flex gap-2 flex-wrap justify-content-center'>
            <button className="btn btn--secondary" type='submit'>
              Reservar
            </button>
            <ButtonRegresar />
          </div>

        </Form>
      )}
    </div>
  )
}