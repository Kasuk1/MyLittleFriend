import { useState } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row, Button, Typography } from "antd";
export const VeterinariasLista = () => {
  const { Meta } = Card;
  const { Title } = Typography;
  const [veterinaria, setVeterinaria] = useState({
    fileList: [
      {
        name: "Veterinaria Dago",
        info: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        name: "Veterinaria Venci",
        info: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
    ]});
  return (
    <>
      <Title level={2} style={{ marginTop: "10px" }}>
        Lista de Veterinarias
      </Title>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 48 }}
        style={{ marginTop: "10px" }}
        justify="center"
        align="middle"
      >
        <Col className="gutter-row">
          <Card
            hoverable
            style={{ width: 300, height: 400 }}
            cover={
              <img
                alt="img"
                src="https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1080x675.jpg"
              />
            }
          >
            <Meta title="Veterinaria van" />
            <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <Button type="primary">Ingresar</Button>
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card
            hoverable
            style={{ width: 300, height: 400 }}
            cover={
              <img
                alt="img"
                src="https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1080x675.jpg"
              />
            }
          >
            <Meta title="Veterinaria" />
            <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <Button type="primary">Ingresar</Button>
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card
            hoverable
            style={{ width: 300, height: 400 }}
            cover={
              <img
                alt="img"
                src="https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1080x675.jpg"
              />
            }
          >
            <Meta title="Veterinaria" />
            <p>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <Button type="primary">Ingresar</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
