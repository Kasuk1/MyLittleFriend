import { FacebookOutlined, InstagramOutlined, PhoneOutlined } from '@ant-design/icons';
import imagotipo from '../../../assets/imagotipo.png';
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterComponent = () => {
    return (
        <Footer id={Footer} style={{ padding: "0 0" }}>
            <div className="contact">
                <img
                    classname="imagotipo"
                    src={imagotipo}
                    alt="imagotipo"
                    style={{ height: "70px", objectFit: "cover" }}
                />
                <div className="redes">
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <PhoneOutlined />
                </div>
            </div>
        </Footer>
    );
};