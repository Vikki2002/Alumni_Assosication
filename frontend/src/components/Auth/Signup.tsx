import { Link } from "react-router-dom"
import Navbar from "../Navbar"


const Signup: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Join the Alumni Community</h2>
                    <form className="space-y-3">
                        <div>
                            <label className="block text-gray-700">Full Name</label>
                            <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2 border rounded bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <div className="relative">
                                <input type="email" placeholder="Enter your alumni email" className="w-full px-4 py-2 border rounded bg-gray-100" />
                                <i className="ri-mail-fill absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input type="password" placeholder="Create password" className="w-full px-4 py-2 border rounded bg-gray-100" />
                                <i className="ri-eye-fill absolute right-3 top-3 text-gray-400 cursor-pointer"></i>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Graduation Year</label>
                            <input type="text" placeholder="YYYY" className="w-full px-4 py-2 border rounded bg-gray-100" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Field of Study</label>
                            <input type="text" placeholder="Select your major" className="w-full px-4 py-2 border rounded bg-gray-100" />
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