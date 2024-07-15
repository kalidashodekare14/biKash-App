import React from 'react';
import bKash from '../../assets/bKash.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-full py-10'>
                <div className='flex flex-col justify-center items-center h-[70vh] '>
                    <img className='w-32' src={bKash} alt="" />
                    <h1 className='mb-5 text-2xl text-[#bd1351]'>Register Here</h1>
                    <div className='flex flex-col space-y-3 w-[70%]'>
                        <input className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Name' type="text" />
                        <input className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Email' type="email" />
                        <input className='input input-bordered  border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Phone Number' type="email" />
                        <input className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='5 Digit Pin' type="number" />
                        <input className='btn bg-[#ed196d] text-white' type="submit" value="Register" />
                    </div>
                    <Link to="/login" className='mt-3 mb-3 hover:text-[#ed196d]'>
                        <p>Already have an Account</p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;