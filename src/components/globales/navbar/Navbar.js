import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const [show, setShow] = useState(false);

    const handelClickBars = () => {
        setShow(!show);
    }

    const className = show ? 'navbar__item show' : 'navbar__item'

    return (
        <>
            <nav className='navbar'>
                <ul className='navbar__list'>
                    <li className={className}><Link to='/services'>Servicios</Link></li>
                    <li className={className}><Link to='/veterinaries'>Veterinarias</Link></li>
                    <li className='navbar__item logo'>
                        <Link to='/'>
                            <i className="fas fa-paw navbar__logo"><span>MyLittleFriend</span></i>
                        </Link>
                    </li>
                    <div className='navbar__social'>
                        <li className={className}><a href='https://www.facebook.com/'>
                            <i className="fab fa-facebook"></i>
                        </a></li>
                        <li className={className}><a href='https://www.google.com/'>
                            <i className="fab fa-whatsapp"></i>
                        </a></li>
                        <li className={className}><a href='https://www.google.com/'>
                            <i className="fab fa-instagram"></i>
                        </a></li>

                    </div>
                    <li className={className}>
                        <Link to='/login'>
                            <i className="fas fa-sign-in-alt"></i>
                        </Link>
                    </li>

                    <li className='navbar__item bars' onClick={handelClickBars}>
                        <i className="fas fa-bars"></i>
                    </li>
                </ul>
            </nav>
        </>

    );
};