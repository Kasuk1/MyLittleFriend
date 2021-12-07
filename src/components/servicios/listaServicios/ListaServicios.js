import {Card, Button, Row, Col, Typography, Space, Image} from 'antd'



const { Meta } = Card;
const {Title} = Typography


export const ListaServicios = () => {
        
    return (
        <div>
            <Row justify="center"  >
                <Title level={2}>Lista de servicios</Title>
                <Col xs={24} md={32}>
                    <Row justify="center" align="bottom" gutter={[32, 16]} span={6} >
                        <Card
                        style={{ width: 250, height: 300, margin: "15px"  }}
                        cover={
                        <Image
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        >
                            <Meta 
                            title="Limpieza general"
                            description="Limpieza general de la mascota, incluye baño, cepillado de dientes"
                            />
                            <Space align="end">
                            <Col flex="100px">
                                <Button type="primary" >Solicitar servicio</Button>
                            </Col>
                            </Space> 
                        </Card>
                        <Card
                        style={{ width: 250, height: 300, margin: "15px" }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        >
                            <Meta 
                            title="Cita urgencias"
                            description="Atención oportuna para tú mascota, no incluye medicamentos"
                            />
                            <Space align="end">
                            <Col flex="100px">
                                <Button type="primary" >Solicitar servicio</Button>
                            </Col>
                            </Space>
                        </Card>
                        <Card
                        style={{ width: 250, height: 300, margin: "15px" }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        >
                            <Meta 
                            title="Cita general"
                            description="Consulta para ver el estado de salud de tu mascota, no incluye medicamentos"
                            />
                            <Col flex="100px">
                                <Button type="primary">Solicitar servicio</Button>
                            </Col>
                            
                        </Card>
                        <Card
                        style={{ width: 250, height: 300, margin: "15px" }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        >
                            <Meta 
                            title="Motilado y peinado"
                            description="Corte y cepillado para la mascota, incluimos accesorios como moños"
                            />
                            <Col flex="100px">
                                <Button type="primary">Solicitar servicio</Button>
                            </Col>
                        </Card>
                        <Card
                        style={{ width: 250, height: 300, margin: "15px" }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        >
                            <Meta                           
                            title="Limpieza general"
                            description="Limpieza general de la mascota, incluye baño, cepillado de dientes"
                            />
                            <Col flex="100px">
                                <Button type="primary">Solicitar servicio</Button>
                            </Col>
                        </Card>
                        <Card
                        style={{ width: 250, height: 300, margin: "15px" }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        >
                            <Meta 
                            title="Limpieza general"
                            description="Limpieza general de la mascota, incluye baño, cepillado de dientes"
                            />
                            <Col flex="100px">
                                <Button type="primary">Solicitar servicio</Button>
                            </Col>
                        </Card>
                    </Row>
                </Col>
            </Row>
            
           
        </div>
    )
}