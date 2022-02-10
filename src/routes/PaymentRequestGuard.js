import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectService } from '../store/serviceSlice/service.slice';


export const PaymentRequestGuard = ({ children }) => {
    const { serviceSelected } = useSelector(selectService);

    return serviceSelected ? children : <Navigate to='/service-request' />;
};
