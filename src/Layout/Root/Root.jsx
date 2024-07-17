import React from 'react';
import { Outlet } from 'react-router-dom';
import './Root.css'

const Root = () => {


    return (
        <div className={`lg:w-[40%] min-h-screen border m-auto`}>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;