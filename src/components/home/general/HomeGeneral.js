import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import heroDogImage from '../../../assets/heroDogImage.png';

import { selectUser } from '../../../store/userSlice/user.slice';
import "./HomeGeneral.css";

export const HomeGeneral = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [touch, setTouch] = useState(false);

    return (
        <>
            <div className="section__hero--container">
                <section className="section__hero">
                    <div className="section__hero--description">
                        <h1 className='section__hero--title heading--1 mb-2'>
                            Controla la salud y cuidado de tu mascota
                        </h1>
                        <p className="section__hero--paragraph paragraph">Explora los diferentes centros de salud para animales
                            y ten un mayor contexto del cuidado de tu mascota.</p>
                        {user ?
                            (
                                <button className="btn btn--primary" onClick={() => navigate('/veterinaries')}>
                                    Ver Veterinarias
                                </button>
                            )
                            :
                            (
                                <button className="btn btn--primary" onClick={() => navigate('/register')}>
                                    Registrarse
                                </button>
                            )
                        }

                    </div>
                    <div className="section__hero--image">
                        <img src={heroDogImage} alt='' />
                    </div>
                </section>
            </div>

            <div className="section__welcome--container">
                <section className="section__welcome">
                    <div className="section__welcome--image">
                        <img
                            src={touch ?
                                'https://images.unsplash.com/photo-1603232644140-bb47da511b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
                                :
                                'https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}
                            onMouseEnter={() => setTouch(true)}
                            onMouseLeave={() => setTouch(false)}
                            alt='Hermosa mascota modelo'
                        />
                    </div>
                    <div className="section__welcome--description">
                        <div>
                            <h2 className='section__welcome--title heading--2'>Bienvenido a <span>MyLittleFriend</span></h2>
                            <div className="horizonal-line">
                                <i className="fas fa-bone horizontal-line--icon"></i>
                            </div>
                        </div>

                        <p className='section__welcome--paragraph paragraph'>Registra tu mascota y empieza a hacer seguimiento de los
                            diferentes servicios que se le han realizado.</p>
                        <button className="btn btn--secondary" onClick={() => navigate('/pets')}>Mis mascotas</button>
                    </div>
                </section>
            </div>

            <div className="section__cta--container">
                <section className="section__cta">
                    <div className="section__cta--description">
                        <div>
                            <h2 className='section__cta--title heading--2'>Goza de sus <span>servicios</span></h2>
                            <div className="horizonal-line mb-2">
                                <i className="fas fa-bone horizontal-line--icon"></i>
                            </div>
                        </div>

                        <p className='section__cta--paragraph paragraph mb-5'>Navega y descubre los diferentes centros
                            disponibles a tu alrededor.</p>
                        <button className="btn btn--secondary" onClick={() => navigate('/services')}>Ver servicios</button>
                    </div>
                    <div className="cta--card">
                        <div className='cta--card__image'>
                            <img
                                src='https://images.unsplash.com/photo-1553550102-590bc483f15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                                alt=''
                            />
                        </div>
                        <div className="cta--card__description">
                            <h2 className="cta--card__title heading--2">
                                Haz <span>seguimiento</span> de tu mascota en un solo lugar.
                            </h2>
                            <p className="cta--card__paragraph paragraph">
                                Descubre los promociones, servicios y novedades
                                que las veterinarias te ofrecen
                                con solo registrarte. Es sencillo y rápido, ¿Qué esperas?.
                            </p>
                            <div className='cta--card__statistics'>
                                <div className='cta--card__statistics--item'>
                                    <p className='cta--card__statistics--number'>
                                        1k+
                                    </p>
                                    <p className='cta--card__statistics--label'>
                                        Veterinarias
                                    </p>
                                </div>
                                <div className='cta--card__statistics--item'>
                                    <p className='cta--card__statistics--number'>
                                        250+
                                    </p>
                                    <p className='cta--card__statistics--label'>
                                        Servicios
                                    </p>
                                </div>
                                <div className='cta--card__statistics--item'>
                                    <p className='cta--card__statistics--number'>
                                        2k+
                                    </p>
                                    <p className='cta--card__statistics--label'>
                                        Solicitudes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
