import React from 'react';
import { PetCardLoading } from '../PetCardLoading/PetCardLoading';
import './PetDetailLoading.css';

export const PetDetailLoading = () => {
    return (
        <div className='pet-detail-loading'>
            <div className='pet-detail-loading__info'>
                <div className='pet-detail-loading__title'></div>
                <div className='pet-detail-loading__subtitle'></div>
                <button className='btn btn--secondary'>Añadir servicio</button>
            </div>
            <PetCardLoading />
            <div className='pet-detail-loading__medical-history'></div>
        </div>
    );
};
