import React from 'react';
import bKash from '../../assets/bKash.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const Register = () => {

    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const userReg = {
            name: data?.name,
            email: data?.email,
            number: data?.phone,
            pin: data?.pin
        }
        // console.log('check', registred)
        axiosPublic.post('/users-register', userReg)
        .then(res =>{
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='w-full lg:py-10'>
                <div className='flex flex-col justify-center items-center h-[70vh] '>
                    <img className='w-32' src={bKash} alt="" />
                    <h1 className='mb-5 text-2xl text-[#bd1351]'>Register Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3 w-[70%]'>
                        <input {...register("name")} className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Name' type="text" />
                        <input {...register("email")} className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Email' type="email" />
                        <input {...register("phone")} className='input input-bordered  border-[#bd1351] rounded-full h-[7vh]' placeholder='Your Phone Number' type="text" />
                        <input {...register("pin")} className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' placeholder='5 Digit Pin' type="number" />
                        <input className='btn bg-[#ed196d] text-white' type="submit" value="Register" />
                    </form>
                    <Link to="/login" className='mt-3 mb-3 hover:text-[#ed196d]'>
                        <p>Already have an Account</p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;