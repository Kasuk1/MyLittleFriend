import "./homeStyles.css";
import { Row, Col, Carousel, Card, Comment, List, Form, Input, Button } from 'antd';
import { useState, useEffect, Fragment } from 'react'
import { data } from './data'

const { Meta } = Card

export const HomeGeneral = () => {
    const [featuredServices, setFeaturedServices] = useState([]);
    const [services, setServices] = useState([]);
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
            setFeaturedServices(data.carouselUrls);
            setServices(data.servicesArray);
            setComments(data.commentsArray);
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
                        { featuredServices.map( (item, index) => (
                            <img alt="example" key={index} className="Image__Carousel" src={item}/>
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
                    services.length > 0 && services.map( item => (
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
