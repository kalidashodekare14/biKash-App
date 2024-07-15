import React from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'
import DashSide from '../../Components/DashSide/DashSide';

const Dashboard = () => {
    return (
        <div className='w-[20%] bg bg-no-repeat bg-cover bg-center m-auto mt-10'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;