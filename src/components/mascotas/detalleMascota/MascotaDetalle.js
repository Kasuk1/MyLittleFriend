import { Link, useParams } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { Table } from 'antd';

import { MascotaDetalleModal } from "./MascotaDetalleModal";

import { mascotas } from "../../../util/data/mascotas";

const { Column } = Table;
const { Meta } = Card;

export const MascotaDetalle = () => {

    const { mascotaId } = useParams();

    const { id, name, description, image, historial } = mascotas.find(mascota => mascota.id === Number(mascotaId));

    return (
        <Row justify="center" gutter={[20, 25]} style={{ padding: "5rem 0.5rem", marginRight: 0, marginLeft: 0 }}>
            <Col xs={24} md={14}>
                <Link to={-1}>Regresar</Link>
            </Col>
            <Col xs={24} md={14}>
                <h2>Historial</h2>
                <Card
                    hoverable
                    style={{ maxWidth: 450, minWidth: 200 }}
                    cover={<img alt={name} src={image} />}
                >
                    <Meta title={name} />
                </Card>
            </Col>
            <Col xs={24} md={14}>
                <Table dataSource={historial}>
                    <Column title="Fecha" dataIndex="date" key="date" responsive={['md']} />
                    <Column title="Veterinaria" dataIndex="vet" key="vet" responsive={['sm']} />
                    <Column title="Descripción" dataIndex="description" key="description" />
                    <Column
                        title="Detalle"
                        key="detail"
                        render={(text, record) => {
                            const detalleServicio = historial.find(s => s.key === record.key);
                            return <MascotaDetalleModal nameButton="Ver más" title="Detalle de servicio" detalle={detalleServicio} />
                        }}
                    />
                </Table>
            </Col>
        </Row>
    )
}
