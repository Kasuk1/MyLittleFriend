import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ButtonRegresar = ({ to }) => {
    const navigate = useNavigate();

    return (
        <button className="btn btn--tertiary" onClick={() => navigate(to ? to : -1)}>
            Cancelar
        </button>
    )
};
