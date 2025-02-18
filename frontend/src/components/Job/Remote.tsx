import Stack from '@mui/material/Stack';


type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    postedBy: string;
    type: string;
}

const jobs: Job[] = [
    {
        id: 1,
        title: "Senior Product Designer",
        company: "Google",
        location: "San Francisco",
        postedBy: "Sarah Chen",
        type: "Remote",
    },
    {
        id: 2,
        title: "Senior Product Designer",
        company: "Google",
        location: "San Francisco",
        postedBy: "Sarah Chen",
        type: "Remote",
    },
    {
        id: 3,
        title: "Senior Product Designer",
        company: "Google",
        location: "San Francisco",
        postedBy: "Sarah Chen",
        type: "Remote",
    },
    {
        id: 4,
        title: "Senior Product Designer",
        company: "Google",
        location: "San Francisco",
        postedBy: "Sarah Chen",
        type: "Remote",
    }
]

const Remote = () => {
    return (<>
        <div className="mt-4">
            <div className="relative">
                <input className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600" placeholder="Filter by location" type="text" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <i className="ri-map-pin-line text-teal-600 "></i>
                </div>
            </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.length > 0 ? (
                (jobs.map((jobsItem, index) => (
                    <div key={index} className="bg-[#cfece9] p-6 rounded-[5px] shadow-md">
                        <div className="flex items-center mb-4">
                            <i className="ri-briefcase-line text-teal-600 text-2xl"></i>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            {jobsItem.title}
                        </h2>
                        <Stack spacing={1} direction="column">
                            <span className="text-gray-500">Company Name : {jobsItem.company}</span>
                            <span className="text-gray-500">Location : {jobsItem.location}</span>
                            <span className="text-gray-500">Post By : {jobsItem.postedBy}</span>
                            <span className="text-gray-500">Job Type : {jobsItem.type}</span>
                        </Stack>
                        <div className="mt-4 flex space-x-2">
                            <button className="bg-teal-600 text-white px-4 py-2 rounded-[5px]">
                                View
                            </button>
                            <button className="bg-teal-100 text-teal-600 px-4 py-2 rounded-[5px]">
                                Save
                            </button>
                        </div>
                    </div>
                )))
            ) : (
                <div className="flex justify-center items-center text-red-700">
                    <p>No jobs</p>
                </div>
            )}
        </div>
        <div className="mt-6 flex justify-center">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md">
                Load More
            </button>
        </div>
    </>)
}

export default Remote;