import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleRegisterPassword = () => {
        setShowRegisterPassword(!showRegisterPassword);
    };

    return (
        <div className='min-h-screen bg-neutral-100 flex items-center justify-center'>
            <div className="max-w-md w-full bg-neutral-50 px-10 py-8 rounded-lg shadow-xl space-y-7">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-neutral-800">
                        Login
                    </h2>
                
                </div>

                <form className="space-y-7">
                    {/* Input section */}
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label htmlFor="username" className="block text-sm font-medium text-neutral-500">
                              Email
                            </label>
                            <input type="text" id='Email' placeholder='e.g. abc@gmial.com' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700" />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="password" className="block text-sm font-medium text-neutral-500">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'} id='password'  className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700" />

                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button type='button' onClick={togglePassword} className="text-neutral-500">
                                        {
                                            showPassword
                                                ?
                                                <FaEyeSlash />
                                                :
                                                <FaEye />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* remember me section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center font-bold gap-x-2">
                            
                        </div>
                        <Link to={"/forgot"} className='text-sm font-bold text-neutral-500 hover:text-red-500 ease-in-out duration-300'>
                            Forgot Password?
                        </Link>
                    </div>

                    {/* button */}
                    <div className="flex justify-center">
    <button type='submit' className="w-40 py-2 px-4 bg-black text-neutral-50 rounded-md flex justify-center">
      Login
                    </button>
</div>
                    {/* seperator */}
                    <div className="flex items-center justify-center">
                        <div className="w-full border-t border-neutral-200"></div>
                        <div className="mx-2 text-neutral-500">or</div>
                        <div className="w-full border-t border-neutral-200"></div>
                    </div>

                    {/* social log icon btn */}
                    
                    <div className="w-full flex items-center justify-between gap-10">
                    <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs flex items-center justify-center gap-x-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" alt="google logo" />
    <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-white transition duration-300 hover:text-blue-600 sm:text-base">Continue with Google</span>
</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login