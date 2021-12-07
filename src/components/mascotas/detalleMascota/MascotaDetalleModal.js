import { Button, Modal } from 'antd'
import React, { useState } from 'react'

export const MascotaDetalleModal = ({ nameButton, title, detalle }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                {nameButton}
            </Button>
            <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h3>Fecha</h3>
                <p>{detalle.date}</p>
                <h3>Veterinaria</h3>
                <p>{detalle.vet}</p>
                <h3>Descripción</h3>
                <p>{detalle.description}</p>
                <h3>Medicamentos</h3>
                <ul>{detalle.medication.map(({ id, name, dose }) => <li key={id}>{name} - {dose}</li>)}</ul>
            </Modal>
        </>
    )
}
