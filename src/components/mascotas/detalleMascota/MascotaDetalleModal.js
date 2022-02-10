import React from 'react';
import { Modal } from 'antd'
import './MascotaDetalleModal.css';

export const MascotaDetalleModal = ({ nameButton, detalle }) => {

    const info = () => {
        Modal.info({
            title: 'Detalle de Servicio',
            className: 'modal--info',
            content: (
                <div className='display-flex flex-column gap-2'>
                    <h3 className='heading--4'>Receta/Medicación</h3>
                    <ul className='display-flex flex-column gap-1'>
                        {detalle?.recipe?.map(({ _id, name, detail }) => (
                            <li key={_id}>
                                <span style={{ fontWeight: 'bold' }}>{name}</span> - {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            )
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
