import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const ReqAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    !user && navigate('/login');
    return children;
};

export default ReqAuth;