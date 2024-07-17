import React from 'react';
import bKash from '../../assets/bKash.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Login = () => {

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const loginUser = {
            email: data.email,
            pin: data.pin
        }
          const response = await axiosSecure.post('/users-login', loginUser)
          console.log(response.data)
          if(response.data === true){
            navigate('/dashboard')
          }
          else{
            console.log('something is rong')
          }
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='w-full lg:py-10'>
                <div className='flex flex-col justify-center items-center h-[70vh] '>
                    <img className='w-32' src={bKash} alt="" />
                    <h1 className='mb-5 text-2xl text-[#bd1351]'>Login Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3 w-[70%]'>
                        <input {...register("email")} className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Email' type="email" />
                        <input {...register("pin")} className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='5 Digit Pin' type="number" />
                        <input className='btn bg-[#ed196d] text-white' type="submit" value="Login" />
                    </form>
                    <Link to="/" className='mt-3 mb-3 hover:text-[#ed196d]'>
                        <p>New Here Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;