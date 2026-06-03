import BreakingNews from '@/components/breakingNews/BreakingNews';
import Header from '@/components/header/Header';
import NavBar from '@/components/navbar/NavBar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default MainLayout;