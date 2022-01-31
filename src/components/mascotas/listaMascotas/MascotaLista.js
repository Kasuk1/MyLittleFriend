import { useNavigate } from "react-router-dom";
import { mascotas } from "../../../util/data/mascotas"
import { Mascota } from "../mascota/Mascota"
import './MascotaLista.css';

export const MascotaLista = () => {
    const navigate = useNavigate();
    return (
        <div className='section__pets--container'>
            <section className="section__pets">
                <div className='section__pets--headers'>
                    <div className='section__pets--description'>
                        <h2 className='section__pets--title heading--1 color-tertiary'>Mis mascotas</h2>
                        <div className="horizonal-line mb-2">
                            <i className="fas fa-bone horizontal-line--icon"></i>
                        </div>
                        <p className='section__pets--paragraph paragraph color-paragraph'>
                            La lista debajo contiene todos los pets que registraste
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
                <div className='section__pets--list'>
                    {mascotas.map(mascota => <Mascota key={mascota.id} {...mascota} />)}
                </div>
            </section>
        </div>

    )
}
