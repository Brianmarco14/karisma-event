import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';

const ProtectedLayout = ({children}) => {
    const {isAuthenticated} = useSelector(state => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            console.log(`User authentication status changed to: ${isAuthenticated}`);
            if (!isAuthenticated) {
                navigate('/login');
            }
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;
    }

    return children ? children : <Outlet/>;
};

export default ProtectedLayout;