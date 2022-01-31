import React from 'react';
import { Modal } from 'antd'
import './MascotaDetalleModal.css';

export const MascotaDetalleModal = ({ nameButton, detalle }) => {

    const info = () => {
        Modal.info({
            title: 'Detalle de Servicio',
            className: 'modal--info',
            content: (
                <div>
                    <h3 className='heading--4'>Fecha</h3>
                    <p className='paragraph'>{detalle.date}</p>
                    <h3 className='heading--4'>Veterinaria</h3>
                    <p className='paragraph'>{detalle.vet}</p>
                    <h3 className='heading--4'>Descripción</h3>
                    <p className='paragraph'>{detalle.description}</p>
                    <h3 className='heading--4'>Medicamentos</h3>
                    <ul>
                        {detalle.medication.map(({ id, name, dose }) => (
                            <li key={id}>{name} - {dose}</li>
                        ))}
                    </ul>
                </div>
            ),
            onOk() { },
        });
    }

    return (
        <>
            <button className="btn btn--tertiary" onClick={info}>
                {nameButton}
            </button>
        </>
    )
}
