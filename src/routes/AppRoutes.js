import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeGeneral } from '../components/home/general/HomeGeneral';
import { FooterComponent } from '../components/globales/footer/Footer';
import { Navbar } from '../components/globales/navbar/Navbar';
import { LoginFormulario } from '../components/login/formularios/LoginFormulario';
import { MascotaDetalle } from '../components/mascotas/detalleMascota/MascotaDetalle';
import { MascotaLista } from '../components/mascotas/listaMascotas/MascotaLista';
import { RegistroFormulario } from '../components/registro/formularios/RegistroFormulario';
import { ListaServicios } from '../components/servicios/listaServicios/ListaServicios';
import { ServicioSolicitud } from '../components/servicios/solicitudServicio/ServicioSolicitud';
import { VeterinariasLista } from '../components/veterinarias/listaVeterinarias/VeterinariasLista';

const { Content } = Layout;

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Navbar />
                <Content>
                    <Routes>
                        <Route path="/" element={<HomeGeneral />}></Route>
                        <Route path="/login" element={<LoginFormulario />}></Route>
                        <Route path="/registro" element={<RegistroFormulario />}></Route>
                        <Route path="/mascotas" element={<MascotaLista />}></Route>
                        <Route path="/mascota/:mascotaId" element={<MascotaDetalle />}></Route>
                        <Route path="/servicios" element={<ListaServicios />}></Route>
                        <Route path="/servicio-solicitud" element={<ServicioSolicitud />}></Route>
                        <Route path="/veterinarias" element={<VeterinariasLista />}></Route>
                        <Route path="/*" element={<HomeGeneral />}></Route>
                    </Routes>
                </Content>
                <FooterComponent />
            </Layout>
        </BrowserRouter>
    )
}
