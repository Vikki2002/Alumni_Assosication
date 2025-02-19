import 'remixicon/fonts/remixicon.css'
import Navbar from "@/components/Navbar";
import SearchAlumniSelector from '@/components/AlumniDriectory/SearchAlumniInput';
import { useNavigate } from 'react-router-dom';

type Alumni = {
    name: string,
    branch: string,
    company: string,
    Position: string,
}

const alumni: Alumni[] = [
    {
        name: "Sarah Johnson",
        branch: "Civil Engineering",
        company: "Tech Innovations",
        Position: "CEO"
    },
    {
        name: "Sarah Johnson",
        branch: "Civil Engineering",
        company: "Tech Innovations",
        Position: "CEO"
    },
];


const AlumniDirectory = () => {
    const navigate = useNavigate();
    const ch = () => {
        navigate('/alumni')
    }
    return (<>
        <Navbar />
        <main className="container mx-auto px-4 py-8 mt-12">
            <div className="mb-4 w-full flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4">
                <SearchAlumniSelector />
                <button className="bg-teal-500 text-white px-4 py-2 rounded">View Profile</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {alumni.length > 0 ? (
                    alumni.map((alumni, index) => (
                        <div key={index} className="bg-teal-50 p-4 rounded shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-teal-200 w-10 h-10 rounded-[100%] flex justify-center items-center">
                                    <i className="ri-user-fill text-teal-500"></i>
                                </div>
                            </div>
                            <div className="mb-2 font-bold text-lg text-gray-800">{alumni.name}</div>
                            <div className="text-gray-600 mb-2">{alumni.branch}</div>
                            <div className="text-gray-600 mb-3">{alumni.Position} at {alumni.company}</div>
                            <button className="bg-teal-500 text-white px-4 py-2 rounded" onClick={ch}>View Profile</button>
                        </div>
                    ))
                ) : (
                    <div className='text-center text-red-500 font-bold text-[24px] mt-12'>No alumni found</div>
                )}
            </div>
        </main>
    </>)
}

export default AlumniDirectory;