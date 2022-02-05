import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ButtonRegresar = () => {
    const navigate = useNavigate();

    return (
        <button className="btn btn--tertiary" onClick={() => navigate(-1)}>
            Cancelar
        </button>
    )
};
