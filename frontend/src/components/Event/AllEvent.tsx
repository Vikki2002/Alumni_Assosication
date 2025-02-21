import React from "react"
import 'remixicon/fonts/remixicon.css'


const AllEvent: React.FC = () => {
    return (<>
        <section className="w-full mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-600">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-teal-100 p-4 rounded-[10px] flex flex-col justify-start">
                    <div className="bg-teal-200 w-10 h-10 rounded-[100%] flex justify-center items-center mr-5">
                        <i className="ri-calendar-2-line text-teal-500 text-[24px]"></i>
                    </div>
                    <div>
                        <div className="text-gray-600">Mar 15, 2024</div>
                        <div className="text-xl font-bold text-gray-800">Annual Alumni Gala</div>
                        <div className="text-gray-600 mb-4">Join us for an evening of networking and celebration</div>
                        <button className="bg-teal-500 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-teal-700">Register</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-12 p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-600">Upcoming Events</h2>
            <div className="space-y-5">
                <div className="flex items-center space-x-4">
                    <div className="text-teal-500 text-3xl">
                        <i className="ri-calendar-event-fill"></i>
                    </div>
                    <div className="">
                        <div className="font-bold text-gray-800">Career Networking Mixer</div>
                        <div className="text-gray-600">March 20, 2024 • Virtual Event</div>
                    </div>
                    <div className="ml-auto text-gray-600">
                        <i className="ri-arrow-right-s-line"></i>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default AllEvent

