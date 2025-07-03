"use client"
import CreateBlogForm from '@/components/blog/CreateBlogForm';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CreateBlogPage = () => {
    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(()=>{
        if (!isLoggedIn) {        
            router.push("/auth/login");        
            return;
        }
    }, [isLoggedIn])

    return (
        <div className='w-full'>
            <h1>Create Blog</h1>
            <CreateBlogForm />
        </div>
    );
};

export default CreateBlogPage;
