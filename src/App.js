import { Row, Col, Carousel, Card, Space } from 'antd';
import { useState, useEffect } from 'react'
const { Meta } = Card

function App() {

  const [featuredServices, setFeaturedServices] = useState([1,2,3,4]);
  const [products, setProducts] = useState([1,2,3,4]);

  useEffect( ()=> {
    //Aca debemos consumir los servicios y setear los estados
  },[])

  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Carousel autoplay>
          <Space size={8}>
            <img alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{'max-width': '100px', height: '100px', 'objet-fit': 'cover'}} />
          </Space>
          <Space>
            <img alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{'max-width': '100px', height: '100px', 'objet-fit': 'cover'}} />
          </Space>
          <Space>
            <img alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{'max-width': '100px', height: '100px', 'objet-fit': 'cover'}} />
          </Space>
          <Space>
            <img alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{'max-width': '100px', height: '100px', 'objet-fit': 'cover'}} />
          </Space>
          </Carousel>
        </Col>
      </Row>
      <Row>
        {products.map( item => (
          <Card
            key={item}
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        ))}
      </Row>
    </>
  );
}

export default App;
