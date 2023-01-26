import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Shared/Footer/Footer';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;