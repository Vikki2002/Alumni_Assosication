import Navbar from "../Navbar";

const JobPostForm = () => {
    return (<>
        <Navbar />
        <div className="w-full max-w-3xl p-8 bg-gray-100 mx-auto mt-[4rem]">
            <h1 className="text-2xl font-bold mb-6 text-black">Post a New Job</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-gray-700 mb-2">Job Title</label>
                    <input id="jobTitle" type="text" placeholder="Enter job title" className="w-full p-2 border rounded bg-gray-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input id="company" type="text" placeholder="Enter company name" className="w-full p-2 border rounded bg-gray-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                    <div className="relative">
                        <input id="location" type="text" placeholder="Enter location or 'Remote'" className="w-full p-2 border rounded bg-gray-50" />
                        <i className="fas fa-map-marker-alt absolute right-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="jobDescription" className="block text-gray-700 mb-2">Job Description</label>
                    <textarea id="jobDescription" placeholder="Describe the role" className="w-full p-2 border rounded bg-gray-50 h-32"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="Responsibilities" className="block text-gray-700 mb-2">Job Responsibilities</label>
                    <textarea id="Responsibilities" placeholder="Describe the Job responsibilities" className="w-full p-2 border rounded bg-gray-50 h-32"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="Requirements" className="block text-gray-700 mb-2">Job Requirements</label>
                    <textarea id="Requirements" placeholder="Describe the Job requirements" className="w-full p-2 border rounded bg-gray-50 h-32"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="salaryRange" className="block text-gray-700 mb-2">Salary Range</label>
                    <div className="relative">
                        <input id="salaryRange" type="text" placeholder="e.g., $50,000 - $70,000" className="w-full p-2 border rounded bg-gray-50" />
                        <i className="fas fa-dollar-sign absolute right-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="applicationDeadline" className="block text-gray-700 mb-2">Application Deadline</label>
                    <div className="relative">
                        <input id="applicationDeadline" type="text" placeholder="Select deadline" className="w-full p-2 border rounded bg-gray-50" />
                        <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                <div className="flex items-center">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Post Job</button>
                    <a href="#" className="text-gray-500">Cancel</a>
                </div>
            </form>
        </div>
    </>)
}

export default JobPostForm;