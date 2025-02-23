import { useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const auth: boolean = false;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center px-6 py-2 text-gray-900 shadow-md">
                <div className="text-xl font-bold">AlumniConnect</div>
                {/* Desktop Navigation */}
                <nav className="space-x-6 hidden md:flex lg:flex font-semibold">
                    <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                    <Link to="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
                    <Link to="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link>
                    <Link to="/event" className="text-gray-600 hover:text-gray-900">Event</Link>
                    <Link to="/donations" className="text-gray-600 hover:text-gray-900">Donations</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                </nav>
                {/* Desktop Buttons */}

                {/* Mobile Menu Button */}
                {auth ? (
                    <div className="flex items-center">
                        <a className="text-teal-600 hover:text-teal-800 px-3 py-2 rounded-md text-sm font-medium" href="#">
                            Browse All
                        </a>
                        <Link to="/jobpost" className="bg-teal-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                            Post a Job
                        </Link>
                        <div className="ml-3 relative">
                            <div>
                                <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:shadow-solid">
                                    <img alt="User profile picture" className="h-8 w-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/ymrMrWp_kY7CbLLRlcKqzIgn1PtE72P9sZ_qtkdOKOI.jpg" width="32" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-x-4 hidden md:flex lg:flex">
                        <Link to="/signup" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">Join Now</Link>
                    </div>
                )}
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden md:hidden p-2 " style={{ color: "rgba(59,152,111,1)" }}>
                    <i className="ri-menu-fill w-[18px] h-[18px]"></i>
                </button>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-95 text-white z-50 overflow-y-auto p-6">
                    <button onClick={() => setMenuOpen(false)} className="absolute top-2 right-3 text-gray-600 text-2xl">
                        ✖
                    </button>
                    <div className="flex flex-col justify-center items-center gap-2 mt-7">
                        <Link onClick={() => setMenuOpen(false)} to="/" className="text-gray-600 hover:text-green-900 text-lg">Home</Link>
                        <Link to="/directory" className="text-gray-600 hover:text-gray-900 text-lg">Directory</Link>
                        <Link to="/jobs" className="text-gray-600 hover:text-gray-900 text-lg">Jobs</Link>
                        <Link to="/event" className="text-gray-600 hover:text-gray-900 text-lg">Event</Link>
                        <Link to="/donations" className="text-gray-600 hover:text-gray-900 text-lg">Donations</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-lg">Contact</Link>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-[3rem] mt-3">
                        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">Join Now</button>
                    </div>

                </div>
            )}
        </>
    );
}

export default Navbar;
