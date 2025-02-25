import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"

const Signup: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Join the Alumni Community</h2>
                    <form className="space-y-3">
                        <div>
                            <label className="block text-gray-700">Full Name</label>
                            <input type="text" placeholder="Enter your full name" className="text-gray-900 font-semibold tracking-[1px] w-full px-4 py-2 border rounded bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <div className="relative">
                                <input type="email" placeholder="Enter your alumni email" className="text-gray-900 font-semibold tracking-[1px] w-full px-4 py-2 border rounded bg-gray-100" />
                                <i className="ri-mail-fill absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Create password" className="text-gray-900 font-semibold tracking-[1px] w-full px-4 py-2 border rounded bg-gray-100" />
                                <i className={showPassword ? "ri-eye-off-fill absolute right-3 top-3 text-gray-400 cursor-pointer" : "ri-eye-fill absolute right-3 top-3 text-gray-400 cursor-pointer"} onClick={() => setShowPassword(!showPassword)}></i>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Graduation Year</label>
                            <input type="text" placeholder="YYYY" className="text-gray-900 font-semibold tracking-[1px] w-full px-4 py-2 border rounded bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Field of Study</label>
                            <input type="text" placeholder="Select your major" className="text-gray-900 font-semibold tracking-[1px] w-full px-4 py-2 border rounded bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="select" className="block text-gray-700">Select Role</label>
                            {/* <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Alumni">Alumni</SelectItem>
                                    <SelectItem value="Student">Student</SelectItem>
                                </SelectContent>
                            </Select> */}
                        </div>
                        <div className="items-top flex space-x-2">
                            {/* <Checkbox id="terms1" /> */}
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms1"
                                    className="text-gray-800 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                                <p className="text-gray-600 text-sm text-muted-foreground">
                                    You agree to our Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Create Account</button>
                        </div>
                    </form>
                    <div className="text-center mt-4 text-blue-500">
                        <p>Already have an account? <Link to="/login" className="text-red-500 tracking-[1px] font-medium text-[16px] cursor-pointer">Log in</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup