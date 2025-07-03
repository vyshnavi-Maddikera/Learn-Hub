import LoginForm from '@/components/auth/LoginForm'
import React from 'react'

const Login = () => {
    return (
        <div className="w-full lg:w-[500px] bg-white p-6 md:w-1/2" >
            <h2 className="text-2xl font-semibold mb-4">Login</h2> 

            <LoginForm/>
        </div >

    )
}

export default Login
