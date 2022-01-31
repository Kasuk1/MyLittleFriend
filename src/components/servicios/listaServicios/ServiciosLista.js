import { useNavigate } from 'react-router-dom';
import { Servicio } from '../Servicio/Servicio';
import { servicios } from '../../../util/data/servicios';

import './ServiciosLista.css';

export const ServiciosLista = () => {
    const navigate = useNavigate();

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
                <div className='section__services--list'>
                    {servicios.map(servicio => <Servicio key={servicio.id} {...servicio} />)}
                </div>
            </div>
        </div>
    )
}