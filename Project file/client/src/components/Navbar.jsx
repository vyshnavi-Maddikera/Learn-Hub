"use client"
import React, { useState } from 'react'
import { Article, Books, Buildings, House, Video, User } from "@phosphor-icons/react";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '@/redux/slices/auth';
import { toast } from 'react-toastify';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const currentRoute = usePathname();

    const toggleProgramsDropdown = () => {
        setIsProgramsOpen(!isProgramsOpen);
    };

    const logout = () => {
        dispatch(signOut())

        toast.success("Logout Successful!", {
            position: "top-center",
        });
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 flex justify-between items-center bg-white border-y">

                <Link className="flex text-xl font-bold leading-none items-center gap-3" href="/">
                    <Books size={32} />
                    LearnHub
                </Link>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    {
                        currentRoute === '/' ? (
                            <li className="flex gap-2 justify-center items-center bg-blue-500 text-white rounded-md p-2 hover:text-gray-100">
                                <House size={20} />
                                <Link className="text-sm"
                                    href="/">Home</Link>
                            </li>
                        ) : (
                            <li className="flex gap-2 justify-center items-center">
                                <House size={20} />
                                <Link className="text-sm text-gray-400 hover:text-gray-500"
                                    href="/">Home</Link>
                            </li>
                        )
                    }

                    <li className="relative group flex gap-2 justify-center items-center">
                        <Video size={20} />
                        <a
                            className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer"
                            onClick={toggleProgramsDropdown}
                        >
                            Programs
                            <svg
                                className={`ml-2 w-4 h-4 inline-block transition-transform transform ${isProgramsOpen ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </a>
                        {isProgramsOpen && (
                            <div className="absolute top-5 left-0 mt-2 space-y-2 bg-white text-gray-600 border rounded">
                                <Link className="block px-4 py-1 hover:bg-gray-100" href="/programs/engineering">
                                    Engineering
                                </Link>
                                <Link className="block px-4 py-1 hover:bg-gray-100" href="/programs/medical">
                                    Medical
                                </Link>
                                <Link className="block px-4 py-1 hover:bg-gray-100" href="/programs/technology">
                                    Technology
                                </Link>
                            </div>
                        )}
                    </li>

                    {
                        currentRoute === '/blogs' ? (
                            <li className="flex gap-2 justify-center items-center bg-blue-500 text-white rounded-md p-2 hover:text-gray-100">
                                <Article size={20} />
                                <Link className="text-sm"
                                    href="/blogs">Blogs</Link>
                            </li>
                        ) : (
                            <li className="flex gap-2 justify-center items-center">
                                <Article size={20} />
                                <Link className="text-sm text-gray-400 hover:text-gray-500"
                                    href="/blogs">Blogs</Link>
                            </li>
                        )
                    }

                    {
                        currentRoute === '/about' ? (
                            <li className="flex gap-2 justify-center items-center bg-blue-500 text-white rounded-md p-2 hover:text-gray-100">
                                <Buildings size={20} />
                                <Link className="text-sm"
                                    href="/about">About</Link>
                            </li>
                        ) : (
                            <li className="flex gap-2 justify-center items-center">
                                <Buildings size={20} />
                                <Link className="text-sm text-gray-400 hover:text-gray-500"
                                    href="/about">About</Link>
                            </li>
                        )
                    }

                </ul>
                {
                    isLoggedIn && (
                        <>


                            <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="/dashboard">Dashborad</Link>

                            <button className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" onClick={() => {
                                logout();
                            }}>Logout</button>
                        </>
                    )
                }

                {
                    !isLoggedIn && (
                        <>
                            <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="/auth/login">Log In</Link>
                            <Link className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="/auth/signup">Sign up</Link>
                        </>
                    )
                }


            </nav>
        </>
    );
}

export default Navbar
