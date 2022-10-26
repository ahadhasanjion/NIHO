import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-12'>
                <div className="flex">
                    <div className=' w-full lg:w-1/4'>
                        <LeftSide></LeftSide>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Outlet className=""></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;