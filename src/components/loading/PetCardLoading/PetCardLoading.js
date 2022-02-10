import React from 'react';
import './PetCardLoading.css';

export const PetCardLoading = () => {
    return (
        <div className='pet-card-loading'>
            <div className='pet-card-loading__image'></div>
            <div className='pet-card-loading__info'>
                <div className='pet-card-loading__name'></div>
                <div className='pet-card-loading__detail--1'></div>
                <div className='pet-card-loading__detail--2'></div>
            </div>
        </div>
    );
};
