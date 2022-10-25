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
                <div className="">
                    {/* <div className=''>
                        <LeftSide></LeftSide>
                    </div> */}
                    <div className=''>
                        <Outlet className=""></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;