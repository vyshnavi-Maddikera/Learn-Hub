"use client"

import BlogCard from '@/components/blog/BlogCard'
import axios from '@/utils/axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const BlogPage = () => {
    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getAllBlogs = async () => {
            const res = await axios.get("/api/blog")
            setBlogs(res.data.blogs)
        }
        getAllBlogs()
    }, [])


    return (
        <div className='mt-14 flex flex-col items-center w-full font-raleway'>
            <div className="bg-neutral-100 py-4 text-center flex flex-col justify-center w-full h-40 md:h-52 lg:h-80">
                <h1 className="text-3xl font-bold">Welcome to Blog Section</h1>
                <p className="mt-2 mb-2">Explore our latest blog posts.</p>
                <div>
                    <button className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" onClick={() => {
                        if (!isLoggedIn) {
                            toast.error("Login to create blog", {
                                position: "top-center",
                            })
                        }
                        else router.push("/blogs/create")
                    }}>Create Blog</button>

                </div>
            </div>

            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24">

                {blogs && blogs.map((blog) => (
                    <Link key={blog._id} href={`/blogs/${blog._id}`}>
                        <BlogCard                            
                            image={blog.imageUrl}
                            title={blog.title}
                            subtitle={blog.subtitle}
                            author={blog.author}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlogPage
