import React from 'react';
import { Link } from 'react-router-dom';

export const LinkRegresar = () => {
    return (
        <Link className='link-color-tertiary' to={-1}>
            <i className="fas fa-arrow-left"></i> Regresar
        </Link>
    );
};
