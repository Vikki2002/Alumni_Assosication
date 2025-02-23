import React from "react"
import Navbar from "../Navbar"
import { Link } from "react-router-dom"

const Login: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <div className="relative">
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded bg-gray-100" />
                                <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded bg-gray-100" />
                                <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Login</button>
                        </div>
                    </form>
                    <div className="text-center mt-4 text-blue-500 flex flex-col justify-start gap-1">
                        <p className="text-gray-900">Password Forgot ?</p>
                        <p >Don't have an account? <Link to="/signup" className="text-red-500 tracking-[1px] font-medium text-[16px] cursor-pointer">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login