import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from 'antd';

import { MascotaDetalleModal } from "./MascotaDetalleModal";
import { LinkRegresar } from "../../globales/links/LinkRegresar/LinkRegresar";
import { PetDetailLoading } from "../../loading/PetDetailLoading/PetDetailLoading";

import { getPetById, selectGetPetByIdState, selectPet, deletePetById } from "../../../store/petSlice/pet.slice";
import './MascotaDetalle.css';

const { Column } = Table;

export const MascotaDetalle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { petId } = useParams();
    const pet = useSelector(selectPet);
    const { loading } = useSelector(selectGetPetByIdState);
    const [showModal, setShowModal] = useState(false);

    const renderBirthdate = (birthdate) => {
        const date = new Date(birthdate);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    useEffect(() => {
        dispatch(getPetById(petId))
    }, [dispatch, petId]);

    const handleDeletePet = () => {
        dispatch(deletePetById(petId));
        navigate(-1);
    }

    return (
        <div className='pet-detail__container'>

            <div className='pet-detail position-relative'>
                <LinkRegresar to='/pets' />
                {loading ?
                    (
                        <PetDetailLoading />
                    )
                    :
                    pet &&
                    (
                        <>
                            <div className='pet-detail__info'>
                                <h2 className='heading--1 color-tertiary'>Historial de {pet.name}</h2>
                                <p className='paragraph color-paragraph mb-5'>
                                    A continuación puedes hacer seguimiento del historial de
                                    servicios que se le realizó a tu mascota.
                                </p>
                                <button
                                    className='btn btn--secondary mb-5'
                                    onClick={() => navigate('/service-request')}
                                >
                                    Añadir servicio
                                </button>
                                <div className='pet-card'>
                                    <img
                                        className='pet-card__image'
                                        src={pet.avatar_url ? pet.avatar_url : 'https://images.unsplash.com/photo-1488290518759-5747f87b653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                                        alt={`${pet.name} Pet`}
                                    />
                                    <div className='pet-card__info'>
                                        <div>
                                            <h2 className='pet-card__name heading--3 color-primary'>
                                                {pet.name}
                                            </h2>
                                            <span className='pet-card__type'>{pet.type}</span>
                                        </div>
                                        <p className='pet-card__description paragraph'>
                                            {pet.detail ? pet.detail : 'Sin descripción'}
                                        </p>
                                        <span className='pet-card__birthdate'>
                                            {pet.birthdate ? renderBirthdate(pet.birthdate) : 'Sin fecha de nacimiento'}
                                        </span>
                                    </div>
                                    <div className='pet-card__options'>
                                        <div className='pet-card__option' onClick={() => navigate('edit')}>
                                            <i className="fas fa-edit"></i>
                                        </div>
                                        <div className='pet-card__option' onClick={() => setShowModal(!showModal)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <Table dataSource={pet.medical_history}>
                                    <Column title="ID" dataIndex="_id" key="_id" responsive={['md']} />
                                    <Column title="Fecha" dataIndex="date" key="date" responsive={['md']} />
                                    <Column title="Veterinaria" dataIndex="vet" key="vet" responsive={['sm']} />
                                    <Column title="Status" dataIndex="status" key="status" />
                                    <Column
                                        title="Detalle"
                                        key="detail"
                                        render={(text, record) => {
                                            const detalleServicio = pet.medical_history?.find(s => s.key === record.key);
                                            return (
                                                <MascotaDetalleModal
                                                    nameButton="Ver más"
                                                    detalle={detalleServicio}
                                                />)
                                        }}
                                    />
                                </Table>
                            </div>
                        </>
                    )
                }

                <div className='modal__container' style={{ display: `${showModal ? 'flex' : 'none'}` }}>
                    <div className='modal'>
                        <div>
                            <p className='modal__question'>¿Estas seguro de eliminar el pet?</p>
                            <p className='paragraph opacity-80'>
                                Recuerda que tu pet será eliminado permanentemente.
                            </p>
                        </div>
                        <div className='display-flex justify-content-center gap-2 flex-wrap'>
                            <button className='btn btn--tertiary' onClick={handleDeletePet}>Eliminar</button>
                            <button className='btn' onClick={() => setShowModal(!showModal)}>Cancelar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
