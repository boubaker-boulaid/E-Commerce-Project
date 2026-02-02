import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function AdminRoute({children}) {
    const {isAdmin, isLogin} = useAuth();
    
    if (!isLogin) return <Navigate to='/login' replace />;

    if (!isAdmin) return <Navigate to='/' replace />;
    
    return children; 
}

export default AdminRoute
