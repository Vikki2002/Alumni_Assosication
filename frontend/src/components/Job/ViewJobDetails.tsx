import 'remixicon/fonts/remixicon.css'
import Navbar from "../Navbar"
import { useLocation } from 'react-router-dom'

type Requirements = {
    sentence: string
}
type Benefits = {
    sentence: string
}
const requirements: Requirements[] = [
    {sentence: "8+ years of product design experience"},
    {sentence: "Strong portfolio demonstrating end-to-end design process"},
    {sentence: "Experience with design systems and component libraries"},
]
const benefits: Benefits[] = [
    { sentence: "Competitive salary and equity package" },
    { sentence: "Comprehensive health, dental, and vision coverage" },
    { sentence: "Flexible work arrangements and unlimited PTO" },
]

const ViewJobDetails = () => {
    const location = useLocation();
    const jobDetail = location.state?.jobDetail; // Access the passed job details

    if (!jobDetail) {
        return <p className="text-red-600 mt-12">No job details available</p>;
    }

    return (<>
        <Navbar />
        <main className="max-w-4xl mx-auto p-4 mt-[4rem]">
            <h1 className="text-3xl font-bold mb-2 text-black">Senior Product Designer</h1>
            <p className="text-gray-600 mb-4">Google • San Francisco, CA • Full-time</p>
            <div className="flex space-x-4 mb-6">
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">Apply Now</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Save Job</button>
            </div>
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">About the Role</h2>
                <p className="text-gray-700">We're looking for a Senior Product Designer to join our team and help shape the future of Google's products. You'll work on complex problems and turn them into simple and elegant solutions.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2 text-black">Requirements</h2>
                <ul className="space-y-2">
                    {requirements.map((req,index)=> (
                        <li key={index} className='flex justify-start items-center'>
                            <i className="ri-checkbox-circle-line text-teal-500 mt-1 mr-2"></i>
                            <span className="text-gray-800">{req.sentence}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-xl font-bold mb-2 text-black">Benefits</h2>
                <ul className="space-y-2">
                    {benefits.map((benef,index) => (
                        <li key={index} className='flex justify-start items-center'>
                            <i className="ri-bard-line text-teal-500 mt-1 mr-3"></i>
                            <span className="text-gray-800">{benef.sentence}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    </>)
}

export default ViewJobDetails