"use client"

import axios from '@/utils/axios';
import React, { useEffect, useState } from 'react'

const SingleBlogPage = ({ params }) => {
    const id = params.id    
    const [blog, setBlog] = useState({})

    useEffect(() => {
        const getSingleBlog = async () => {
            const res = await axios.get(`/api/blog/${id}`)
            setBlog(res.data.blog)           
        }
        getSingleBlog()
    }, [])

    return (
        <>
            {
                blog && blog.author && (
                    <div className='w-full p-14 md:p-20 flex flex-col items-center mt-14'>
                        <h1 className="text-3xl font-bold">{blog.title}</h1>
                        <p className="mt-4">Author: {blog.author.firstName + " " + blog.author.lastName}</p>
                        <p className="mb-2 italic">{blog.author.profession}</p>
                        <img src={`http://localhost:3001/images/${blog.imageUrl}`} alt={blog.title} className="my-4 w-full md:w-3/4 lg:w-1/2" />
                        <p className='font-medium mb-20'>{blog.subtitle}</p>
                        <div className='mt-5 px-3 md:px-24 lg:px-52'>
                            {
                                blog.descriptions.map((desc) => {
                                    return (
                                        <div key={desc._id}>
                                            <h2 className='text-2xl font-medium'>{desc.heading}</h2>
                                            <p className='mb-5'>{desc.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SingleBlogPage
