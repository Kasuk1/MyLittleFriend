import { useNavigate } from "react-router-dom";
import { Card, Col } from "antd";

const { Meta } = Card;

export const Mascota = ({ id, name, description, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/mascota/${id}`)
    }

    return (
        <Col>
            <Card
                onClick={handleClick}
                hoverable
                style={{ width: "250px" }}
                cover={<img src={image} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />}
            >
                <Meta title={name} description={description} />
            </Card>
        </Col>


    );
}
