import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <LeftSide></LeftSide>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;