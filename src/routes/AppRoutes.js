import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeGeneral } from '../components/home/general/HomeGeneral';
import { FooterComponent } from '../components/globales/footer/Footer';
import { Navbar } from '../components/globales/navbar/Navbar';
import { RegistroFormulario } from '../components/registro/formularios/RegistroFormulario';
import { LoginFormulario } from '../components/login/formularios/LoginFormulario';
import { ServiciosLista } from '../components/servicios/listaServicios/ServiciosLista';
import { VeterinariasLista } from '../components/veterinarias/listaVeterinarias/VeterinariasLista';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice/user.slice';

export const AppRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.localStorage.getItem('tokenInvalid')) {
            dispatch(logout());
            window.localStorage.clear();
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path='/login' element={
                        <PublicRoutes>
                            <LoginFormulario />
                        </PublicRoutes>
                    }
                    />
                    <Route path='/login/:tokenActivateUser' element={<LoginFormulario />} />
                    <Route path='/register' element={
                        <PublicRoutes>
                            <RegistroFormulario />
                        </PublicRoutes>
                    }
                    />

                    <Route path='/*' element={<PrivateRoutes />} />

                    <Route path="/services" element={<ServiciosLista />}></Route>
                    <Route path="/veterinaries" element={<VeterinariasLista />}></Route>
                    <Route path="/" element={<HomeGeneral />}></Route>
                </Routes>
            </main>
            <footer>
                <FooterComponent />
            </footer>
        </BrowserRouter>
    )
}
