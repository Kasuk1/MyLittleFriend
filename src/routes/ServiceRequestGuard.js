import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectPet } from '../store/petSlice/pet.slice';

export const ServiceRequestGuard = ({ children }) => {
    const pet = useSelector(selectPet);

    return pet ? children : <Navigate to='/pets' />;
};
