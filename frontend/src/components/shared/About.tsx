import { ArrowRight, Book, BriefcaseBusiness, CalendarDays, EyeIcon, GraduationCapIcon, HandHeart, Handshake, History, LucideBrainCog, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const About: React.FC = () => {
    return (
        <div className="">
            <main className="container max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    About
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Connecting graduates, building futures, and strengthening communities since 2015.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-green-100 p-6 rounded-lg shadow">
                        <div className="text-green-500 text-2xl mb-2">
                            <GraduationCapIcon />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-900">
                            Our Purpose
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Mission
                        </p>
                        <p className="text-gray-600 mb-4">
                            AlumniConnect empowers graduates to build meaningful connections, share opportunities, and create lasting impact in their communities.
                        </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg shadow">
                        <div className="text-green-500 text-2xl mb-2">
                            <History />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-900">
                            Our Story
                        </h2>
                        <p className="text-gray-700 mb-4">
                            History
                        </p>
                        <p className="text-gray-600 mb-4">
                            Founded in 2015 by three university graduates who saw the need for continued connection beyond graduation day.
                        </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg shadow">
                        <div className="text-green-500 text-2xl mb-2">
                            <EyeIcon />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-900">
                            Our Goals
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Vision
                        </p>
                        <p className="text-gray-600 mb-4">
                            To create the world's most vibrant alumni ecosystem where every graduate can thrive professionally and personally.
                        </p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Platform Features
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Discover the tools that make AlumniConnect the premier platform for graduates worldwide.
                </p>
                <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                        <div className="text-green-500 text-2xl mr-4">
                            <Users />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700">
                                Networking
                            </h3>
                            <p className="text-gray-600">
                                Connect with alumni across industries and regions
                            </p>
                        </div>
                        <div className="text-gray-500">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-green-500 text-2xl mr-4">
                            <LucideBrainCog />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700">
                                Mentorship
                            </h3>
                            <p className="text-gray-600">
                                Share knowledge and guidance with structured programs
                            </p>
                        </div>
                        <div className="text-gray-500">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-green-500 text-2xl mr-4">
                            <CalendarDays />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700">
                                Events
                            </h3>
                            <p className="text-gray-600">
                                Participate in exclusive alumni gatherings and webinars
                            </p>
                        </div>
                        <div className="text-gray-500">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-green-500 text-2xl mr-4">
                            <BriefcaseBusiness />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700">
                                Job Board
                            </h3>
                            <p className="text-gray-600">
                                Access career opportunities shared by fellow alumni
                            </p>
                        </div>
                        <div className="text-gray-500">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-green-500 text-2xl mr-4">
                            <Book />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700">
                                Resource Library
                            </h3>
                            <p className="text-gray-600">
                                Access exclusive educational content and tools
                            </p>
                        </div>
                        <div className="text-gray-500">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-green-500 text-2xl mr-4">
                            <HandHeart />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-700">
                                Fundraising
                            </h3>
                            <p className="text-gray-600">
                                Support initiatives that matter to your alma mater
                            </p>
                        </div>
                        <div className="text-gray-500">
                            <ArrowRight />
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Community Impact
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Our growing community is making a difference every day.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg shadow flex flex-col justify-start gap-1">
                        <div className='bg-gray-200 w-10 h-10 rounded-[50%] flex justify-center items-center'>
                            <Users className='text-green-600' size={25} strokeWidth={2} absoluteStrokeWidth />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">
                            10,000+
                        </h3>
                        <p className="text-gray-600">
                            Active members from over 120 countries, connecting daily
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow flex flex-col justify-start gap-1">
                        <div className='bg-gray-200 w-10 h-10 rounded-[50%] flex justify-center items-center'>
                            <Handshake className='text-green-600' size={25} strokeWidth={2} absoluteStrokeWidth />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">
                            500+
                        </h3>
                        <p className="text-gray-600">
                            Mentorship connections made quarterly across disciplines
                        </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow flex flex-col justify-start gap-1">
                        <div className='bg-gray-200 w-10 h-10 rounded-[50%] flex justify-center items-center'>
                            <BriefcaseBusiness className='text-green-600' size={25} strokeWidth={2} absoluteStrokeWidth />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">
                            1,000+
                        </h3>
                        <p className="text-gray-600">
                            Job opportunities shared monthly by community members
                        </p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Success Stories
                </h2>
                <Carousel />
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Join Our Community
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Become part of a global network that supports your professional journey.
                </p>
                <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-6">
                    <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" to="#">
                        Register Now
                    </Link>
                    <Link className="bg-blue-100 text-blue-500 px-4 py-2 rounded hover:bg-blue-200" to="#">
                        Contact Us
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default About;
