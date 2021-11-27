import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomeGeneral } from '../components/home/general/HomeGeneral';
import { LoginFormulario } from '../components/login/formularios/LoginFormulario';
import { RegistroFormulario } from '../components/registro/formularios/RegistroFormulario';


const { Header, Footer, Content } = Layout;

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>

                <Header>Header</Header>

                <Content>
                    <Routes>
                        <Route path="/" element={<HomeGeneral />}></Route>
                        <Route path="/login" element={<LoginFormulario />}></Route>
                        <Route path="/registro" element={<RegistroFormulario />}></Route>
                        <Route path="/*" element={<HomeGeneral />}></Route>
                    </Routes>
                </Content>

                <Footer>Footer</Footer>

            </Layout>
        </BrowserRouter>
    )
}
