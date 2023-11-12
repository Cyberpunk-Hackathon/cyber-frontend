import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <div className='page-body'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;