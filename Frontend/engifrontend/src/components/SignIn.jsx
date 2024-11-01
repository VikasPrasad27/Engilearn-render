import React from 'react';
import { useForm } from 'react-hook-form';

function SignIn() {
    const { register, handleSubmit,reset } = useForm();

    // Rename the handleSubmit function to avoid conflict
    const onSubmit = (data) => {
        console.log("FORM SUBMITTED", data);
        reset();
    };

    return (
        <div className='w-full h-screen bg-teal-400 flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[50vw] h-[60vh] bg-white p-6 rounded shadow'>
                <input {...register("NAME", { required: true ,minLength:3,maxLength:20})} type="text" placeholder='NAME' className='border p-2 mb-4 w-full' /><br />
                <input {...register("Email", { required: true })} type="email" placeholder='Email' className='border p-2 mb-4 w-full' /><br />
                <input
                    {...register("Password", { 
                        required: true, 
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*[\W_])(?=.{9,}).*$/, 
                            message: "Password must contain at least 1 uppercase letter, 1 special character, and be at least 9 characters long."
                        } 
                    })}
                    type="password"
                    placeholder='Password'
                    className='border p-2 mb-4 w-full'/>
                <input type="submit" value="SUBMIT" className='bg-teal-600 text-white p-2 rounded cursor-pointer' /><br />
            </form>
        </div>
    );
}

export default SignIn;

