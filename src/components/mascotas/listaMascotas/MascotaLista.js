import { Button, Col, Row } from "antd"
import { mascotas } from "../../../util/data/mascotas"
import { Mascota } from "../mascota/Mascota"

export const MascotaLista = () => {
    return (
        <Row justify="center" gutter={[20, 25]} style={{ padding: "7.5rem 0.5rem", marginLeft: 0, marginRight: 0 }}>
            <Col xs={22} md={13}>
                <Row gutter={15}>
                    <Col flex="auto">
                        <h2>Mis mascotas</h2>
                    </Col>
                    <Col flex="100px">
                        <Button type="primary">Agregar mascota</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} md={14}>
                <Row justify="center" wrap={true} gutter={[20, 25]}>
                    {mascotas.map(mascota => <Mascota key={mascota.id} {...mascota} />)}
                </Row>
            </Col>
        </Row>
    )
}
