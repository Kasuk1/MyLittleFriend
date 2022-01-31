import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeGeneral } from '../components/home/general/HomeGeneral';
import { FooterComponent } from '../components/globales/footer/Footer';
import { Navbar } from '../components/globales/navbar/Navbar';
import { RegistroFormulario } from '../components/registro/formularios/RegistroFormulario';
import { LoginFormulario } from '../components/login/formularios/LoginFormulario';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {

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
                    <Route path='/register' element={
                        <PublicRoutes>
                            <RegistroFormulario />
                        </PublicRoutes>
                    }
                    />

                    <Route path='/*' element={<PrivateRoutes />} />
                    <Route path="/" element={<HomeGeneral />}></Route>
                </Routes>
            </main>

            <footer>
                <FooterComponent />
            </footer>
        </BrowserRouter>
    )
}
