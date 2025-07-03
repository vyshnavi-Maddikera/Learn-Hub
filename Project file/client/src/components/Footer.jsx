"use client"
import { Books, Globe, House, Phone } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

export default function App() {
    return (
        <footer
            className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-8 font-raleway">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-justify">

                        <h6
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            LearnHub
                        </h6>

                        <p>
                            Our platform offers a diverse range of courses and resources, empowering learners to explore their passions, gain new skills, and achieve their educational goals
                        </p>
                    </div>

                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Programs
                        </h6>
                        <p className="mb-4">
                            <Link href="/programs/engineering" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                            >Engineering</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/programs/medical" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                            >Medical</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/programs/technology" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                            >Technology</Link>
                        </p>                        
                    </div>

                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <Link href="/blogs" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                            >Blogs</Link>
                        </p>
                        {/* <p className="mb-4">
                            <a className="text-neutral-600 dark:text-neutral-200"
                            >Resources</a>
                        </p> */}
                        <p className="mb-4">
                            <Link href="/about" className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500"
                            >About Us</Link>
                        </p>
                    </div>

                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start gap-3">
                            <House size={20} />
                            Punjab Engineering College
                        </p>
                        <a className="mb-4 flex items-center justify-center md:justify-start gap-3" href='https://pec.ac.in/'>
                            <Globe size={20} />
                            Website
                        </a>
                        <p className="mb-4 flex items-center justify-center md:justify-start gap-3">
                            <Phone size={20} />
                            + 01 234 567 88
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                <span>© 2023 Copyright: </span>
                <a
                    className="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="https://tailwind-elements.com/"
                >LearnHub</a>
            </div>
        </footer>
    );
}