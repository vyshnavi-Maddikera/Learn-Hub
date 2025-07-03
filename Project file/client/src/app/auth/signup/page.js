import SignUpForm from '@/components/auth/SignUpForm';
import React from 'react';

const SignUp = () => {
    return (
        <div className=" w-full lg:w-1/2 md:w-1/2 p-5 md:p-0 mr-8" >
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

            <SignUpForm />
        </div>

    );
};

export default SignUp;
