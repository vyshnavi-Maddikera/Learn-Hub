"use client"

import React from 'react'
import Link from 'next/link'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from '@/utils/axios';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/slices/auth';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        email: "",
        password: "",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        register,
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {

            const response = await axios.post("/api/auth/login", {
                ...data,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            
            toast.success(response.data.message, {
                position: "top-center",
            });

            dispatch(logIn({
                isLoggedIn: true,
                token: response.data.token,
                user_id: response.data.user_id               
            }))             
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
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Your email"
                    autoComplete="email"
                />
                <p className='text-red-600'>{errors.email?.message}</p>
            </div>
            <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Your password"
                    autoComplete="off"
                />
                <p className='text-red-600'>{errors.password?.message}</p>
            </div>

            <p className="mx-auto mt-2 text-slate-600">
                New on our platform?
                <Link
                    href="/auth/signup"
                    className="text-blue-500 hover:text-blue-800 ml-1"
                >
                    Create an account
                </Link>
            </p>

            <div className="mt-4">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                >
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm
