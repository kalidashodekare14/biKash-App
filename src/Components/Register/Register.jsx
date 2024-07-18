import React, { useState } from 'react';
import bKash from '../../assets/bKash.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const Register = () => {

    const [role, setRole] = useState("")
    const axiosPublic = useAxiosPublic()


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRole = () => {
        
    }

    const onSubmit = (data) => {
        console.log(data)
        const userReg = {
            name: data?.name,
            email: data?.email,
            number: data?.phone,
            pin: data?.pin,
            role: data?.role
        }
        // console.log('check', registred)
        axiosPublic.post('/users-register', userReg)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Register Succussfuly",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res.data)
            })
            .catch(error => {
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
                        <input {...register("pin")} className='input input-bordered border-[#bd1351] rounded-full h-[7vh]' maxLength="5" required placeholder='5 Digit Pin' type="number" />
                        <select {...register("role")} className="select select-bordered w-full border-[#bd1351] rounded-full">
                            <option disabled selected>Your Role</option>
                            <option>User</option>
                            <option>Agent</option>
                        </select>
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