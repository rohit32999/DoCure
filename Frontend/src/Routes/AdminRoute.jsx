import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {ClerkProvider, useClerk } from '@clerk/clerk-react';
import useAdmin from '../Hooks/userToken';
import Loading from '../Pages/Shared/LoadingPage/LoadingPage';

const AdminRoute = ({ children }) => {
    const { user, loading } = useClerk();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;