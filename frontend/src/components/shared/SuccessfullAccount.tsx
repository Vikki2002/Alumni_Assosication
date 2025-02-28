import React from 'react';
import { CalendarDays, CheckCircle, CircleUser, Users } from "lucide-react";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const SuccessfullAccount: React.FC = () => {
    return (
        <>
        <Navbar />
            <div className="container mx-auto px-4 pt-[4rem]">
                <main>
                    <section className="mb-8">
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                                <h2 className="ml-2 text-xl font-semibold text-gray-700">Account Created Successfully!</h2>
                            </div>
                            <p className="mb-4 text-gray-600">Welcome to AlumniConnect. Your account has been created and is ready to use.</p>
                            <div className="flex space-x-4">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Go to Dashboard</button>
                                <button className="bg-green-100 text-green-500 px-4 py-2 rounded-lg">Complete Profile</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CircleUser className='text-2xl text-green-500' />
                                <Link to="/profile" className="ml-4">
                                    <h4 className="font-semibold text-gray-800">Complete Your Profile</h4>
                                    <p className="text-gray-600">Add a profile photo and additional details</p>
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <Users className="text-green-500 text-2xl" />
                                <Link to="" className="ml-4">
                                    <h4 className="font-semibold text-gray-800">Connect with Alumni</h4>
                                    <p className="text-gray-600">Find and connect with fellow graduates</p>
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <CalendarDays className="text-green-500 text-2xl" />
                                <Link to="" className="ml-4">
                                    <h4 className="font-semibold text-gray-800">Explore Events</h4>
                                    <p className="text-gray-600">Discover upcoming alumni events and gatherings</p>
                                </Link>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </>
    );
};

export default SuccessfullAccount;