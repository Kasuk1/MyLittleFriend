import { Navigate, Route, Routes } from "react-router-dom";
import { HomeGeneral } from "../components/home/general/HomeGeneral";
import { MascotaDetalle } from "../components/mascotas/detalleMascota/MascotaDetalle";
import { MascotaLista } from "../components/mascotas/listaMascotas/MascotaLista";
import { MascotaRegistro } from "../components/mascotas/registroMascotas/MascotaRegistro";
import { ServiciosLista } from "../components/servicios/listaServicios/ServiciosLista";
import { ServicioSolicitud } from "../components/servicios/solicitudServicio/ServicioSolicitud";
import { VeterinariasLista } from "../components/veterinarias/listaVeterinarias/VeterinariasLista";

export const PrivateRoutes = () => {
    const user = {
        logged: true,
    }
    return user.logged ? (
        <Routes>
            <Route path='/*' element={<HomeGeneral />} />
            <Route path="/pets" element={<MascotaLista />}></Route>
            <Route path="/pet/:petId" element={<MascotaDetalle />}></Route>
            <Route path="/pet-register" element={<MascotaRegistro />}></Route>
            <Route path="/services" element={<ServiciosLista />}></Route>
            <Route path="/service-request" element={<ServicioSolicitud />}></Route>
            <Route path="/veterinaries" element={<VeterinariasLista />}></Route>
        </Routes>
    )
        :
        <Navigate to='/login' />
        ;
};
