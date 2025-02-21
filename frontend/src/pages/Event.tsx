import AllEvent from "@/components/Event/AllEvent";
import PastEvent from "@/components/Event/PastEvent";
import UpcomingEvent from "@/components/Event/UpcomingEvent";
import Navbar from "@/components/Navbar"
import React, { useState } from "react"

const EventNavigation: string[] = ["All Events", "Upcoming", "Past", "My RSVPs"];

const Event: React.FC = () => {
    const [selectEventIndex, setEventIndex] = useState<number>(0);
    const EventIndex = (index: number) => {
        setEventIndex(index);
    }
    const renderComponent = () => {
        switch (selectEventIndex) {
            case 0:
                return <AllEvent />;
            case 1:
                return <UpcomingEvent />;
            case 2:
                return <PastEvent />;
            default:
                return <AllEvent />;
        }
    }
    return (<>
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-10">
            <div className="mt-6 mb-6">
                <div className="flex space-x-4">
                    {EventNavigation.map((event, index) => (
                        <button key={index} onClick={() => EventIndex(index)} className={`text-teal-600 pb-2 ${index === selectEventIndex ? 'border-b-2 border-teal-600' : ''}`}>
                            {event}
                        </button>
                    ))}
                </div>
            </div>
            {selectEventIndex === 0 && (
                <div className="flex items-center space-x-4 mb-8">
                    <input type="text" placeholder="Search events" className="bg-white border text-gray-900 focus:outline-none border-gray-600 hover:outline-none rounded px-4 py-2 w-full max-w-xs" />
                    <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">Create Event</button>
                </div>
            )}
            <div>{renderComponent()}</div>
        </main>
    </>)
}

export default Event