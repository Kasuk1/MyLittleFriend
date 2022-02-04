import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { HomeGeneral } from "../components/home/general/HomeGeneral";
import { MascotaDetalle } from "../components/mascotas/detalleMascota/MascotaDetalle";
import { MascotaLista } from "../components/mascotas/listaMascotas/MascotaLista";
import { MascotaRegistro } from "../components/mascotas/registroMascotas/MascotaRegistro";
import { ServicioSolicitud } from "../components/servicios/solicitudServicio/ServicioSolicitud";
import { ServiceRequestGuard } from "./ServiceRequestGuard";

import { selectUser } from "../store/userSlice/user.slice";

export const PrivateRoutes = () => {
    const user = useSelector(selectUser);

    return user ? (
        <Routes>
            <Route path='/*' element={<HomeGeneral />} />
            <Route path="/pets" element={<MascotaLista />}></Route>
            <Route path="/pet/:petId" element={<MascotaDetalle />}></Route>
            <Route path="/pet-register" element={<MascotaRegistro />}></Route>
            <Route path="/service-request" element={
                <ServiceRequestGuard>
                    <ServicioSolicitud />
                </ServiceRequestGuard>
            }>
            </Route>
        </Routes>
    )
        :
        <Navigate to='/login' />
        ;
};
