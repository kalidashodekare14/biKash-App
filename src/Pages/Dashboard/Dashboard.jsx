import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'
import DashSide from '../../Components/DashSide/DashSide';
import { FaBarsStaggered } from 'react-icons/fa6';
import { isMobile } from 'react-device-detect';

const Dashboard = () => {

 

    return (
        <div className={`flex lg:w-[40%] min-h-screen border m-auto `}>
           <DashSide></DashSide>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;