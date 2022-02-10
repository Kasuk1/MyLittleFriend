import React from 'react';

import './CreditCardLoading.css';

export const CreditCardLoading = () => {
    return (
        <div className='credit-card-loading'>
            <div className='credit-card-loading__primary'>
                <div className='credit-card-loading__chip'></div>
                <div className='credit-card-loading__number'></div>
            </div>
            <div className='credit-card-loading__secondary'>
                <div className='credit-card-loading__month'></div>
                <div className='credit-card-loading__year'></div>
            </div>
            <p className='credit-card-loading__name'>VISA</p>
        </div>
    );
};
