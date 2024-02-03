import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {ClerkProvider, useClerk } from '@clerk/clerk-react';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useClerk();
    const location = useLocation();


    if (loading) {
        return <>
            <div><h1 className='text-2xl py-16 text-center'>Please Book New</h1></div>
        </>
    }

    if (user && user.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;