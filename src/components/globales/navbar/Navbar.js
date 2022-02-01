import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout, selectUser } from '../../../store/userSlice/user.slice';
import './Navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const [showItems, setShowItems] = useState(false);
    const user = useSelector(selectUser);

    const handelClickBars = () => {
        setShowItems(!showItems);
    }

    const className = showItems ? 'navbar__item show' : 'navbar__item'

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
                        <li className={className}><a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                            <i className="fab fa-facebook"></i>
                        </a></li>
                        <li className={className}><a href='https://www.whatsapp.com/' target='_blank' rel='noreferrer'>
                            <i className="fab fa-whatsapp"></i>
                        </a></li>
                        <li className={className}><a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                            <i className="fab fa-instagram"></i>
                        </a></li>
                    </div>

                    <span className={className + ' divider'}> | </span>

                    <li className={className}>
                        <div className="icons-user-logged">
                            {
                                user ?
                                    (
                                        <>
                                            <Link to='/pets'>
                                                {
                                                    user.avatar_url ? (
                                                        <img
                                                            className='user-avatar'
                                                            src={user.avatar_url}
                                                            alt=''
                                                        />
                                                    )
                                                        :
                                                        (
                                                            <i className="fas fa-user-circle"></i>
                                                        )
                                                }
                                            </Link>
                                            <span className='divider'> | </span>
                                            <Link to='/login' onClick={() => dispatch(logout())}>
                                                <i className="fas fa-sign-out-alt"></i>
                                            </Link>
                                        </>
                                    )
                                    :
                                    (
                                        <Link to='/login'>
                                            <i className="fas fa-sign-in-alt"></i>
                                        </Link>
                                    )
                            }
                        </div>
                    </li>
                    <li className='navbar__item bars' onClick={handelClickBars}>
                        <i className="fas fa-bars"></i>
                    </li>
                </ul>
            </nav>
        </>
    );
};
