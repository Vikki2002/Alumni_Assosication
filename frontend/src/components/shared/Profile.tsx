import { CalendarMinus2Icon, ImageUp } from 'lucide-react';
import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <main>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Complete Your Profile</h2>
                <p className="text-gray-600 mb-6">Help us personalize your experience by providing some information</p>
                <section className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Personal Information</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="profile-photo" className="block text-gray-700 mb-2">Profile Photo</label>
                            <div className="flex items-center">
                                <input type="file" id="profile-photo" className="hidden" />
                                <label htmlFor="profile-photo" className="cursor-pointer bg-gray-100 border border-gray-300 rounded-md py-2 px-4 flex items-center justify-between w-full">
                                    <span className='text-gray-600'>Upload a photo</span>
                                    <ImageUp className='text-green-900' size={36} strokeWidth={3} absoluteStrokeWidth />
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="graduation-year" className="block text-gray-600 mb-2">Graduation Year</label>
                            <div className="flex items-center">
                                <input type="text" id="graduation-year" placeholder="Enter your graduation year" className="text-gray-800 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full" />
                                <i className="fas fa-calendar-alt ml-2"></i>
                                <CalendarMinus2Icon className='text-green-900' size={36} strokeWidth={3} absoluteStrokeWidth/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="major-field-of-study" className="block text-gray-700 mb-2">Major/Field of Study</label>
                            <input type="text" id="major-field-of-study" placeholder="Enter your major" className="text-gray-800 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full" />
                        </div>
                    </form>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Professional Information</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="current-position" className="block text-gray-700 mb-2">Current Position</label>
                            <input type="text" id="current-position" placeholder="Enter your job title" className="text-gray-800 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                            <input type="text" id="company" placeholder="Enter your company name" className="text-gray-800 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="industry" className="block text-gray-700 mb-2">Industry</label>
                            <input type="text" id="industry" placeholder="Select your industry" className="text-gray-800 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bio" className="block text-gray-700 mb-2">Bio</label>
                            <textarea id="bio" placeholder="Tell us about yourself and your professional journey" className="text-gray-800 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full h-32"></textarea>
                        </div>
                    </form>
                </section>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md">Continue</button>
            </main>
        </div>
    );
};

export default Profile;