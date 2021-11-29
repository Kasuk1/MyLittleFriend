import { Card, Col } from "antd"

const { Meta } = Card;

export const Mascota = ({ name, description, image }) => {
    return (
        <Col>
            <Card
                hoverable
                style={{ width: "250px" }}
                cover={<img src={image} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />}
            >
                <Meta title={name} description={description} />
            </Card>
        </Col>


    );
}
