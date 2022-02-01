import React from 'react';
import { PetCardLoading } from '../PetCardLoading/PetCardLoading';
import './PetListLoading.css';

export const PetListLoading = () => {
    return (
        <div className='pet-list-loading'>
            {[1, 2, 3, 4].map(num => <PetCardLoading key={num} />)}
        </div>
    );
};
