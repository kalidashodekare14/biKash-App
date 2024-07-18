import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setAuthenticated(true)
        }
        setLoading(false)
    }, [isAuthenticated, loading])

    if (loading) {
        <div>Loading.....</div>
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;