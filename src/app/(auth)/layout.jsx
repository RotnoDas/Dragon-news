import NavBar from '@/components/navbar/NavBar';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default AuthLayout;