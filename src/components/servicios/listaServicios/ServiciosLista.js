import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Servicio } from '../Servicio/Servicio';

import { getVeterinaries, selectGetVeterinariesState, selectVeterinaries } from '../../../store/veterinarySlice/veterinary.slice';
import './ServiciosLista.css';
import { useEffect } from 'react';
import { CardListLoading } from '../../loading/CardListLoading/CardListLoading';

export const ServiciosLista = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const veterinaries = useSelector(selectVeterinaries);
    const { loading, message } = useSelector(selectGetVeterinariesState);

    useEffect(() => {
        dispatch(getVeterinaries());
    }, [dispatch])

    return (
        <div className='section__services--container'>
            <div className='section__services'>
                <div className='section__services--headers'>
                    <div>
                        <h2 className='heading--1 color-tertiary'>Servicios</h2>
                        <div className="horizonal-line mb-2">
                            <i className="fas fa-bone horizontal-line--icon"></i>
                        </div>
                    </div>
                    <p className='paragraph color-paragraph'>
                        La lista debajo contiene todos mayoría de servicios registrados
                        y vigentes, estos pueden cambiar por veterinaria, !Averigua cual te conviene¡.
                    </p>
                    <button
                        className='btn btn--secondary mt-5'
                        onClick={() => navigate('/pets')}
                    >
                        Solicitar servicio
                    </button>
                </div>

                {
                    loading ?
                        (
                            <CardListLoading />
                        )
                        :
                        veterinaries &&
                        (
                            <div className='section__services--list'>
                                {message && <p>{message}</p>}
                                {veterinaries?.map(veterinary => {
                                    return veterinary.services?.map(service => (
                                        <Servicio key={service._id} {...service} veterinary={veterinary.name} />
                                    ))
                                })}
                                {!veterinaries.length && (
                                    <h2 className='paragraph color-paragraph opacity-50'>
                                        Aún no hay veterinarias registradas 🙄.
                                        Trataremos de revertir esto lo mas pronto posible 😁.
                                    </h2>
                                )}
                            </div>
                        )
                }

            </div>
        </div>
    )
}