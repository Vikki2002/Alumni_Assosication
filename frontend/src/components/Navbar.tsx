import { useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import RoleSelectionModal from "./shared/Modal";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const auth: boolean = false;

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center px-6 py-2 text-gray-900 shadow-md">
                <Link to="/" className="text-xl font-bold">AlumniConnect</Link>

                {auth ? (
                    <>
                        <nav className="space-x-6 hidden md:flex lg:flex font-semibold">
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                            <Link to="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
                            <Link to="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link>
                            <Link to="/event" className="text-gray-600 hover:text-gray-900">Event</Link>
                            <Link to="/donations" className="text-gray-600 hover:text-gray-900">Donations</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                        </nav>
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
                    </>

                ) : (
                    <>
                        <nav className="space-x-6 hidden md:flex lg:flex font-semibold">
                            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                            <Link to="/directory" className="text-gray-600 hover:text-gray-900">Directory</Link>
                            <Link to="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link>
                            <Link to="/event" className="text-gray-600 hover:text-gray-900">Event</Link>
                            <Link to="/donations" className="text-gray-600 hover:text-gray-900">About</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Privacy</Link>
                        </nav>
                        <button
                            onClick={() => setShowModal(!showModal)}
                            className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm text-blue-400 font-semibold shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                        >
                            Join Now
                        </button>
                    </>

                )}
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden md:hidden p-2 " style={{ color: "rgba(59,152,111,1)" }}>
                    <i className="ri-menu-fill w-[18px] h-[18px]"></i>
                </button>
            </header>

            {showModal && (
                <RoleSelectionModal showModal={showModal} setShowModal={setShowModal} />
            )}

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
                    {showModal && (
                        <RoleSelectionModal showModal={showModal} setShowModal={setShowModal} />
                    )}

                </div>
            )}
        </>
    );
}

export default Navbar;
