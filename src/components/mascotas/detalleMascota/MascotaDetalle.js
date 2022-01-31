import { useNavigate, useParams } from "react-router-dom";
import { Table } from 'antd';
import { MascotaDetalleModal } from "./MascotaDetalleModal";
import { mascotas } from "../../../util/data/mascotas";
import './MascotaDetalle.css';
import { LinkRegresar } from "../../globales/links/LinkRegresar/LinkRegresar";

const { Column } = Table;

export const MascotaDetalle = () => {
    const navigate = useNavigate();

    const { petId } = useParams();

    const { name, description, image, historial } = mascotas.find(mascota => mascota.id === Number(petId));

    return (
        <div className='pet-detail__container'>
            <div className='pet-detail'>
                <LinkRegresar />
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
                        <img className='pet-card__image' src={image} alt='' />
                        <div className='pet-card__info'>
                            <h2 className='pet-card__name heading--3 color-primary'>{name}</h2>
                            <p className='pet-card__description paragraph'>{description}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Table dataSource={historial}>
                        <Column title="Fecha" dataIndex="date" key="date" responsive={['md']} />
                        <Column title="Veterinaria" dataIndex="vet" key="vet" responsive={['sm']} />
                        <Column title="Descripción" dataIndex="description" key="description" />
                        <Column
                            title="Detalle"
                            key="detail"
                            render={(text, record) => {
                                const detalleServicio = historial.find(s => s.key === record.key);
                                return (
                                    <MascotaDetalleModal
                                        nameButton="Ver más"
                                        detalle={detalleServicio}
                                    />)
                            }}
                        />
                    </Table>
                </div>
            </div>
        </div>

    )
}
