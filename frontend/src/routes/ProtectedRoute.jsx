import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const {isLogin} = useAuth();

    return isLogin ? children : <Navigate to='/login' replace /> ;
}

export default ProtectedRoute
