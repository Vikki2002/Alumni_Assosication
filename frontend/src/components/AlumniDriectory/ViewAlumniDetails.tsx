import 'remixicon/fonts/remixicon.css'
import Navbar from '../Navbar';

const ViewAlumniDetails = () => {
    return (
        <>
        <Navbar />
        <main className="container mx-auto px-4 py-8 mt-12">
            <div className="max-w-96 bg-teal-50 p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                    <div className="bg-teal-200 w-10 h-10 rounded-[100%] flex justify-center items-center mr-5">
                        <i className="ri-user-fill text-teal-500"></i>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-700">Sarah Johnson</h1>
                        <p className="text-gray-600">CEO at Tech Innovations</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded">Connect</button>
                    <button className="bg-teal-100 text-teal-500 px-4 py-2 rounded">Message</button>
                </div>
            </div>
            <section className="flex flex-col justify-start gap-3">
                <h2 className="text-xl font-bold text-gray-500 mb-2">Professional Information</h2>
                <div>
                    <h3 className="font-semibold text-blue-600">Current Position</h3>
                    <p className="text-gray-600">CEO at Tech Innovations</p>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-600">Class Year</h3>
                    <p className="text-gray-600">2015</p>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-600">Location</h3>
                    <p className="text-gray-600">San Francisco, CA</p>
                </div>
            </section>
            <section className='flex flex-col justify-start gap-3 mt-4'>
                <h2 className="text-xl font-bold text-gray-700 mb-2">Contact Information</h2>
                <div className="">
                    <h3 className="font-semibold text-blue-600">Email</h3>
                    <p className="text-gray-600">sarah.johnson@techinnovations.com</p>
                </div>
                <div className="">
                    <h3 className="font-semibold text-blue-600">LinkedIn</h3>
                    <p className="text-gray-600">linkedin.com/in/sarahjohnson</p>
                </div>
            </section>
        </main></>
    )
}
export default ViewAlumniDetails;