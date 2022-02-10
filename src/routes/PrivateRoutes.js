import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { HomeGeneral } from "../components/home/general/HomeGeneral";
import { MascotaDetalle } from "../components/mascotas/detalleMascota/MascotaDetalle";
import { MascotaLista } from "../components/mascotas/listaMascotas/MascotaLista";
import { MascotaRegistro } from "../components/mascotas/registroMascotas/MascotaRegistro";
import { MascotaEdit } from "../components/mascotas/editarMascota/MascotaEdit";
import { ServicioSolicitud } from "../components/servicios/solicitudServicio/ServicioSolicitud";
import { Payment } from "../components/payments/payment/Payment";
import { ServiceRequestGuard } from "./ServiceRequestGuard";
import { PaymentRequestGuard } from "./PaymentRequestGuard";

import { selectUser } from "../store/userSlice/user.slice";

export const PrivateRoutes = () => {
    const user = useSelector(selectUser);

    return user ? (
        <Routes>
            <Route path='/*' element={<HomeGeneral />} />
            <Route path="/pets" element={<MascotaLista />}></Route>
            <Route path="/pet/:petId" element={<MascotaDetalle />}></Route>
            <Route path="/pet/:petId/edit" element={<MascotaEdit />}></Route>
            <Route path="/pet-register" element={<MascotaRegistro />}></Route>
            <Route path="/service-request" element={
                <ServiceRequestGuard>
                    <ServicioSolicitud />
                </ServiceRequestGuard>
            }>
            </Route>
            <Route path='/service-request/payment' element={
                <ServiceRequestGuard>
                    <PaymentRequestGuard>
                        <Payment />
                    </PaymentRequestGuard>
                </ServiceRequestGuard>
            }>
            </Route>
        </Routes>
    )
        :
        <Navigate to='/login' />
        ;
};
