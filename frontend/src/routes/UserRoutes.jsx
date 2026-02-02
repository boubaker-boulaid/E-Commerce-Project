import React, { Children } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

function UserRoutes({children}) {
    const {isLogin, isAdmin} = useAuth();

    if (isLogin && isAdmin) return <Navigate to='/admin' replace />;
    
    return children ;
}

export default UserRoutes
