import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Mascota } from "../mascota/Mascota"
import { UserMiniProfile } from "../../globales/mini/userMiniProfile/UserMiniProfile";

import { getPets, selectGetPetsState, selectUser } from "../../../store/userSlice/user.slice";
import './MascotaLista.css';


export const MascotaLista = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const userId = user.id;
    const pets = user.pets;
    const { loading, message } = useSelector(selectGetPetsState);

    useEffect(() => {
        dispatch(getPets(userId));
    }, [dispatch, userId]);

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
                {
                    loading ?
                        (
                            <h1>Loading Pets...</h1>
                        )
                        :
                        (
                            <div className='section__pets--list'>
                                {message && <p>{message}</p>}
                                {pets?.map(pet => <Mascota key={pet._id} {...pet} />)}
                            </div>
                        )
                }

            </section>
        </div>

    )
}
