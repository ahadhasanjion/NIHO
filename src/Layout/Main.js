import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto "grid grid-cols-3 gap-4'>
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;