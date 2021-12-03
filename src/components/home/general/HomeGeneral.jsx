import { Row, Col, Carousel, Card, Comment, Tooltip, List, Form, Input, Button } from 'antd';
import { useState, useEffect, Fragment } from 'react'
import moment from 'moment';
import "./homeStyles.css";

const carouselUrls = [
    "https://www.dogingtonpost.com/wp-content/uploads/2018/03/dogscaping-main.jpg",
    "https://dta0yqvfnusiq.cloudfront.net/green28404175/2019/12/Safe-fertilizer-and-landscape-for-pets-5de6d71278d66.jpg",
    "https://www.dogingtonpost.com/wp-content/uploads/2018/03/dogscaping-main.jpg",
    "https://dta0yqvfnusiq.cloudfront.net/green28404175/2019/12/Safe-fertilizer-and-landscape-for-pets-5de6d71278d66.jpg"
];

const servicesArray = [
    { id: 1, title: 'Baño', description: 'Servicio de baño para cachorros', url: 'data:image/jpeg;base64,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'},
    { id: 2, title: 'Consulta Medica', description: 'Servicio de atencion medica', url: 'data:image/jpeg;base64,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'},
    { id: 3, title: 'Desparacitacion', description: 'Servicio de desparacitacion', url: 'data:image/jpeg;base64,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'}
]

const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

const { Meta } = Card

export const HomeGeneral = () => {
    const [featuredServices, setFeaturedServices] = useState([]);
    const [services, setServices] = useState();
    const [comments, setComments] = useState([]);
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8},
    };
    const tailLayout = {
        wrapperCol: { offset: 8 },
    };

    useEffect( ()=> {
    //Aca debemos consumir los servicios y setear los estados
        setTimeout( () => {
            setFeaturedServices(carouselUrls);
            setServices(servicesArray);
            setComments(data);
        }, 2000)
    },[])

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Fragment>
            <Row justify="center">
                <Col span={24}>
                    <Carousel autoplay>
                        { featuredServices.map( item => (
                            <img alt="example" className="Image__Carousel" src={item}/>
                        ))}
                    </Carousel>
                </Col>
                <Col span={18} md={24} className="Form__Container" justify="center">
                    <h1 className="Form__Title">Suscribete y recibe noticias</h1>
                    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        <Form.Item name="note" label="Email" rules={[{ required: true, type: "email", message: 'Porfavor, ingrese su email!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Enviar
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row justify="center" className="Services__Container">
                {
                    services && services.map( item => (
                        <Card
                            key={item.id}
                            className="Service__Container"
                            cover={
                            <img
                                alt="example"
                                src={item.url}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            description={item.description}
                            />
                        </Card>
                    ))
                }
            </Row>
            <Row justify="center" className="Comments_Container">
                <List
                    className="comment-list"
                    header={`${comments.length} replies`}
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={item => (
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                        />
                    </li>
                    )}
                />
            </Row>
        </Fragment>
    )
}
