"use client"

import React from 'react'
import Link from 'next/link'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from '@/utils/axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignUpForm = () => {
    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone no. is required'),
        age: Yup.string().required('Age is required'),
        profession: Yup.string().required('Profession is required'),
        gender: Yup.string().required('Gender is required'),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        profession: "",
        gender: ""
    };

    const methods = useForm({
        resolver: yupResolver(SignUpSchema),
        defaultValues
    });

    const {
        register,
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/auth/register", {
                ...data,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })

            toast.success("Account Created!", {
                position: "top-center",
            });

            router.push("/auth/login")
        } catch (error) {            
            toast.error(error.message, {
                position:"top-center",
            })
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };

    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="name"
                    />
                    <p className='text-red-600'>{errors.firstName?.message}</p>
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        {...register("lastName")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="name"
                    />
                    <p className='text-red-600'>{errors.lastName?.message}</p>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="email"
                    />
                    <p className='text-red-600'>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                    />
                    <p className='text-red-600'>{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                        Phone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        {...register("phone")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="tel"
                    />
                    <p className='text-red-600'>{errors.phone?.message}</p>
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-600">
                        Age
                    </label>
                    <input
                        type="text"
                        id="age"
                        {...register("age")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="off"
                    />
                    <p className='text-red-600'>{errors.age?.message}</p>
                </div>
                <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-600">
                        Profession
                    </label>
                    <input
                        type="text"
                        id="profession"
                        {...register("profession")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        autoComplete="on"
                    />
                    <p className='text-red-600'>{errors.profession?.message}</p>
                </div>
                <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
                        Gender
                    </label>
                    <select
                        id="gender"
                        {...register("gender")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <p className='text-red-600'>{errors.gender?.message}</p>
                </div>
            </div>
            <p className="mx-auto mt-2 text-slate-600">
                Already have an account?
                <Link href="/auth/login" className="text-blue-500 hover:text-blue-800 ml-1">
                    Login
                </Link>
            </p>
            <div className="mt-4">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                >
                    Sign Up
                </button>
            </div>
        </form>
    )
}

export default SignUpForm
