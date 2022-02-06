import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import chipCard from '../../../assets/chipcard.png';
import { selectPayment, setCurrentCard, setPaymentFormType } from '../../../store/paymentSlice/payment.slice';
import './Card.css';

export const Card = ({ card, mask, name, exp_month, exp_year }) => {
    const dispatch = useDispatch();
    const { currentCard } = useSelector(selectPayment);

    const handleCardClick = () => {
        dispatch(setCurrentCard(card));
        dispatch(setPaymentFormType('registerPayment'));
    }

    return (
        <div className={currentCard?.id === card.id ? 'card selected' : 'card'} onClick={handleCardClick}>
            <div className='card__primary'>
                <img className='card__chip' src={chipCard} alt='' />
                <p className='card__mask'>{mask}</p>
            </div>
            <div className='card__secondary'>
                <p className='card__holder'></p>
                <p className='card__expiration'>VENC.: {exp_month}/{exp_year}</p>
            </div>

            <p className='card__name'>{name}</p>
        </div>
    );
};
