import React from 'react';
import { Outlet } from 'react-router-dom';
import './Root.css'

const Root = () => {
    return (
        <div className='w-[20%] bg bg-no-repeat bg-cover bg-center m-auto mt-10'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;