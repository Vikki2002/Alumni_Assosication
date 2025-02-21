import Navbar from "@/components/Navbar"
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
import AllJobs from "@/components/Job/AllJobs";
import FullTime from "@/components/Job/FullTime";
import InternshipJobs from "@/components/Job/InternshipJobs";
import Remote from "@/components/Job/Remote";
// import { useState } from "react";

type JobNavigation = {
    title: string;
}

const jobNavigation: JobNavigation[] = [
    { title: "All Jobs" },
    { title: "Full-time" },
    { title: "Internship" },
    { title: "Remote" },
]


const Job = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); // State to track selected button
    const handleSelection = (index: number) => {
        setSelectedIndex(index);
    }
    const renderComponent = () => {
        switch (selectedIndex) {
            case 0:
                return <AllJobs />;
            case 1:
                return <FullTime />;
            case 2:
                return <InternshipJobs />;
            case 3:
                return <Remote />;
            default:
                return <AllJobs />;
        }
    };


    return (<>
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-10">
            <h1 className="text-2xl font-semibold text-gray-900">
                {selectedIndex === 0 ? (
                    'Latest Job Opportunities'
                ) : selectedIndex === 1 ? (
                    'Full-Time Job Opportunities'
                ) : selectedIndex === 2 ? (
                    'Internship Opportunities'
                ) : selectedIndex === 3 && ('Remote Job Opportunities')}
            </h1>
            <div className="mt-6">
                <div className="flex space-x-4">
                    {jobNavigation.map((job, index) => (
                        <button key={index} onClick={() => handleSelection(index)} className={`text-teal-600 pb-2 ${index === selectedIndex ? 'border-b-2 border-teal-600' : ''}`}>
                            {job.title}
                        </button>
                    ))}
                </div>
            </div>
            <div>{renderComponent()}</div>
        </div>
    </>)
}

export default Job