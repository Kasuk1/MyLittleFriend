import Logo from './assets/Logo.png';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header } = Layout;

export const Navbar = () => {
  return (
    <Header
      style={{ position: "fixed", zIndex: 1, width: "100%", height: "103px" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <div className="menu-items">
          <div className="items">
            <img
              classname="pet"
              src={Logo}
              alt="Logo"
              style={{ height: "80px", objectFit: "cover" }}
            />
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">Productos</Menu.Item>
            <Menu.Item key="3">Veterinarias</Menu.Item>
          </div>
          <UserOutlined style={{ fontSize: "30px" }} />
        </div>
      </Menu>
    </Header>
    
  );
};
