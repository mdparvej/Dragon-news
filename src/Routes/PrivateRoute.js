import React, { useContext } from 'react';
import { myContex } from '../Pages/AuthContex/AuthContex';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {currentUser,loading} = useContext(myContex);
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    
    if(!currentUser){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute; 