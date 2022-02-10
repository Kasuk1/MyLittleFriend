import React from 'react';
import { PetCardLoading } from '../PetCardLoading/PetCardLoading';
import './CardListLoading.css';

export const CardListLoading = () => {
    return (
        <div className='pet-list-loading'>
            {[1, 2, 3, 4].map(num => <PetCardLoading key={num} />)}
        </div>
    );
};
