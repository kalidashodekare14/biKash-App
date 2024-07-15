import React, { useState } from 'react';

const DashSide = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <div className=''>
            <button className='btn'>Open</button>
        </div>
    );
};

export default DashSide;