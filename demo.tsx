<html>
<head>
    <title>Post a New Job</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body className="bg-gray-100">
    <div className="flex min-h-screen">
        <div className="w-1/4 bg-green-100 p-4">
            <div className="text-lg font-bold mb-6">AlumniConnect</div>
            <ul>
                <li className="mb-4">
                    <a href="#" className="flex items-center text-gray-700">
                        <i className="fas fa-home mr-2"></i> Home
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center text-gray-700">
                        <i className="fas fa-address-book mr-2"></i> Directory
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center text-gray-700 bg-green-200 p-2 rounded">
                        <i className="fas fa-briefcase mr-2"></i> Jobs
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center text-gray-700">
                        <i className="fas fa-calendar-alt mr-2"></i> Events
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center text-gray-700">
                        <i className="fas fa-donate mr-2"></i> Donations
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex items-center text-gray-700">
                        <i className="fas fa-envelope mr-2"></i> Contact
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-3/4 p-8">
            <div className="text-sm text-gray-500 mb-4">
                <a href="#" className="hover:underline">Jobs</a>
                 <a href="#" className="hover:underline">Post New Job</a>
            </div>
            <h1 className="text-2xl font-bold mb-6">Post a New Job</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-gray-700 mb-2">Job Title</label>
                    <input id="jobTitle" type="text" placeholder="Enter job title" className="w-full p-2 border rounded bg-gray-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input id="company" type="text" placeholder="Enter company name" className="w-full p-2 border rounded bg-gray-50"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                    <div className="relative">
                        <input id="location" type="text" placeholder="Enter location or 'Remote'" className="w-full p-2 border rounded bg-gray-50"/>
                        <i className="fas fa-map-marker-alt absolute right-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="jobDescription" className="block text-gray-700 mb-2">Job Description</label>
                    <textarea id="jobDescription" placeholder="Describe the role, responsibilities, and requirements" className="w-full p-2 border rounded bg-gray-50 h-32"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="salaryRange" className="block text-gray-700 mb-2">Salary Range</label>
                    <div className="relative">
                        <input id="salaryRange" type="text" placeholder="e.g., $50,000 - $70,000" className="w-full p-2 border rounded bg-gray-50"/>
                        <i className="fas fa-dollar-sign absolute right-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="applicationDeadline" className="block text-gray-700 mb-2">Application Deadline</label>
                    <div className="relative">
                        <input id="applicationDeadline" type="text" placeholder="Select deadline" className="w-full p-2 border rounded bg-gray-50"/>
                        <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
                    </div>
                </div>
                <div className="flex items-center">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Post Job</button>
                    <a href="#" className="text-gray-500">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</body>
</html>