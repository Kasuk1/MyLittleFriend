import { Col, Row } from "antd"
import { mascotas } from "../../../util/data/mascotas"
import { Mascota } from "../mascota/Mascota"

export const MascotaLista = () => {
    return (
        <Row justify="center">
            <Col xs={24} xl={16}>
                <Row justify="center" wrap={true} gutter={[20, 25]} style={{ padding: "5rem 0.5rem" }}>
                    {mascotas.map(mascota => <Mascota key={mascota.id} {...mascota} />)}

                </Row>
            </Col>
        </Row>
    )
}
