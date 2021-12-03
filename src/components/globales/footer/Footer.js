import { UserOutlined, FacebookOutlined, InstagramOutlined,PhoneOutlined } from '@ant-design/icons';
import imagotipo from './assets/imagotipo.png'

const { Footer } = Layout;

export const Footer = () => {
  return (
    <Footer id={Footer} style={{ padding: "0 0" }}>
      <div className="contact">
        <img
          classname="imagotipo"
          src={imagotipo}
          alt="imagotipo"
          style={{ height: "100px", objectFit: "cover" }}
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
