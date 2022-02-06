import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Mascota } from "../mascota/Mascota"
import { UserMiniProfile } from "../../globales/mini/userMiniProfile/UserMiniProfile";
import { CardListLoading } from "../../loading/CardListLoading/CardListLoading";

import { getPets, resetUserMethodsMessage, selectGetPetsState, selectUser } from "../../../store/userSlice/user.slice";
import './MascotaLista.css';
import { resetPaymentMethods, selectRegisterPaymentState } from "../../../store/paymentSlice/payment.slice";

export const MascotaLista = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const userId = user.id;
    const pets = user.pets;
    const { loading, message, status } = useSelector(selectGetPetsState);
    const registerPaymentState = useSelector(selectRegisterPaymentState);

    useEffect(() => {
        dispatch(getPets(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        if (status === 'Failed') {
            setTimeout(() => {
                dispatch(resetUserMethodsMessage('getPetsState'));
            }, 3000);
        }
    }, [dispatch, status]);

    useEffect(() => {
        if (registerPaymentState.status === 'OK') {
            setTimeout(() => {
                dispatch(resetPaymentMethods('registerPaymentState'));
            }, 5000)
        }
    }, [dispatch, registerPaymentState])

    return (
        <div className='section__pets--container'>
            <section className="section__pets">
                <div className='section__pets--headers'>
                    <div className='section__pets--description'>
                        <div>
                            <h2
                                className='section__pets--title heading--1 color-tertiary display-flex align-items-center flex-wrap gap-1'
                            >
                                Mascotas de
                                <UserMiniProfile avatar_url={user.avatar_url} full_name={user.full_name} />
                            </h2>
                            <div className="horizonal-line mb-2">
                                <i className="fas fa-bone horizontal-line--icon"></i>
                            </div>
                        </div>

                        <p className='section__pets--paragraph paragraph color-paragraph'>
                            Es genial verte otra vez, recuerda que las lista
                            aquí debajo contiene todos los pets que registraste
                            hasta el momento. El botón de Agregar Mascota te enviará al
                            formulario respectivo para añadir a tu mas querido, !Qué esperas¡.
                        </p>
                    </div>
                    <button
                        className='btn btn--cuaternary'
                        onClick={() => navigate('/pet-register')}
                    >
                        Agregar mascota
                    </button>
                </div>
                {status === 'Failed' && <p className='error-message align-self-flex-start'>{message}</p>}
                {registerPaymentState.status === 'OK' && <p className='error-message align-self-flex-start'>{registerPaymentState.message}</p>}
                {
                    loading ?
                        (
                            <CardListLoading />
                        )
                        :
                        pets &&
                        (
                            <div className='section__pets--list'>
                                {pets?.map(pet => <Mascota key={pet._id} {...pet} />)}
                                {!pets.length && (
                                    <h2 className='paragraph color-paragraph opacity-50'>
                                        Aún no tienes pets en tu perfil 🙄.
                                        Agrega desde el botón Agregar Mascota allí arriba 😁.
                                    </h2>
                                )}
                            </div>
                        )

                }
            </section>
        </div>

    )
}
