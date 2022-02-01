import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from 'antd';
import { MascotaDetalleModal } from "./MascotaDetalleModal";
import { LinkRegresar } from "../../globales/links/LinkRegresar/LinkRegresar";
import { getPetById, selectGetPetByIdState, selectPet } from "../../../store/petSlice/pet.slice";
import './MascotaDetalle.css';

const { Column } = Table;

export const MascotaDetalle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { petId } = useParams();
    const pet = useSelector(selectPet);
    const {
        name,
        avatar_url,
        detail,
        birthdate,
        type,
        medical_history,
    } = pet;
    const { loading } = useSelector(selectGetPetByIdState);

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

    return (
        <div className='pet-detail__container'>

            <div className='pet-detail'>
                <LinkRegresar />
                {loading ?
                    (
                        <h1>Loading Pet by Id...</h1>
                    )
                    :
                    pet &&
                    (
                        <>
                            <div className='pet-detail__info'>
                                <h2 className='heading--1 color-tertiary'>Historial de {name}</h2>
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
                                        src={avatar_url ? avatar_url : 'https://images.unsplash.com/photo-1488290518759-5747f87b653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                                        alt={`${name} Pet`}
                                    />
                                    <div className='pet-card__info'>
                                        <div>
                                            <h2 className='pet-card__name heading--3 color-primary'>
                                                {name}
                                            </h2>
                                            <span className='pet-card__type'>{type}</span>
                                        </div>
                                        <p className='pet-card__description paragraph'>
                                            {detail}
                                        </p>
                                        <span className='pet-card__birthdate'>
                                            {renderBirthdate(birthdate)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Table dataSource={medical_history}>
                                    <Column title="Fecha" dataIndex="date" key="date" responsive={['md']} />
                                    <Column title="Veterinaria" dataIndex="vet" key="vet" responsive={['sm']} />
                                    <Column title="Descripción" dataIndex="description" key="description" />
                                    <Column
                                        title="Detalle"
                                        key="detail"
                                        render={(text, record) => {
                                            const detalleServicio = medical_history?.find(s => s.key === record.key);
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
            </div>
        </div>

    )
}
