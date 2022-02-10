import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPayment } from '../../../store/paymentSlice/payment.slice';

import { getUserCardData, resetUserMethodsMessage, selectGetUserCardData, selectUser } from '../../../store/userSlice/user.slice';
import { CreditCardLoading } from '../../loading/CreditCardLoading/CreditCardLoading';
import { Card } from '../card/Card';
import './CardList.css';

export const CardList = () => {
    const dispatch = useDispatch();
    const { id: userId, cards } = useSelector(selectUser);
    const { formType } = useSelector(selectPayment);
    const { loading, status, message } = useSelector(selectGetUserCardData);

    useEffect(() => {
        dispatch(getUserCardData(userId));
    }, [dispatch, userId, formType]);

    useEffect(() => {
        if (status) {
            setTimeout(() => {
                dispatch(resetUserMethodsMessage('getUserCardData'));
            }, 4000);
        }
    }, [dispatch, status]);


    return (
        <div className='card-list'>
            {loading ?
                [1, 2, 3, 4].map(key => <CreditCardLoading key={key} />)
                :
                status === 'Failed' ? (
                    <p className='color-paragraph'>{message}</p>
                )
                    :
                    cards &&
                    (
                        cards.length ? (
                            <>
                                {cards?.map(card => <Card key={card.id} card={card} {...card.card} />)}
                            </>
                        )
                            :
                            <p className='color-paragraph'>No tienes tarjetas registradas 😔.</p>
                    )
            }
        </div>
    );
};
