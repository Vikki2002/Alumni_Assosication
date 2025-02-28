import { Cog, Eye, Filter, Scale, Server, ShieldEllipsis, University } from 'lucide-react';
import React from 'react';


const Privacy: React.FC = () => {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-8">
            {/* Main Heading */}
            <h1 className="text-3xl font-bold mb-2 text-gray-700">Our Privacy</h1>
            <p className="text-lg mb-8 text-gray-600">At AlumniConnect, we prioritize your privacy and data protection</p>

            {/* Key Commitments */}
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                        <Eye className='text-green-500 text-xl mr-2'/>
                        <h3 className="text-lg font-semibold text-gray-700">Transparency</h3>
                    </div>
                    <p className='text-gray-600'>We clearly explain what data we collect and how it’s used. No hidden practices or complicated language.</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                        <Cog className='text-green-500 text-xl mr-2'/>
                        <h3 className="text-lg font-semibold text-gray-700">Control</h3>
                    </div>
                    <p className='text-gray-600'>You maintain ownership of your data with granular privacy settings and export options.</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                        <ShieldEllipsis className='text-green-500 text-xl mr-2'/>
                        <h3 className="text-lg font-semibold text-gray-700">Security</h3>
                    </div>
                    <p className='text-gray-600'>Your data is protected with industry-standard encryption and regular security audits.</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                        <Filter className='text-green-500 text-xl mr-2'/>
                        <h3 className="text-lg font-semibold text-gray-700">Minimal Collection</h3>
                    </div>
                    <p className='text-gray-600'>We only collect information essential to providing our alumni networking services.</p>
                </div>
            </div>

            {/* Data Retention Policy */}
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Data Retention Policy</h2>
            <p className="mb-8 text-gray-600">We retain your personal information only as long as necessary to provide our services or as required by law. You can request deletion of your account and associated data at any time.</p>

            {/* Third-Party Sharing */}
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Third-Party Sharing</h2>
            <ul className="mb-8">
                <li className="flex items-center mb-2">
                    <Server className='text-green-500 text-xl mr-2'/>
                    <span className='text-gray-700'>Service Providers</span>
                    <p className="ml-6 text-gray-600">Limited data shared with hosting and analytics providers</p>
                </li>
                <li className="flex items-center mb-2">
                    <University className='text-green-500 text-xl mr-2'/>
                    <span className='text-gray-700'>Educational Institutions</span>
                    <p className="ml-6 text-gray-600">Verification of alumni status only with consent</p>
                </li>
                <li className="flex items-center mb-2">
                    <Scale className='text-green-500 text-xl mr-2'/>
                    <span className='text-gray-700'>Legal Requirements</span>
                    <p className="ml-6 text-gray-600">Only when required by applicable laws</p>
                </li>
            </ul>

            {/* Your Privacy Choices */}
            <h2 className="text-xl font-semibold mb-4 text-green-700">Your Privacy Choices</h2>
            <div className="mb-8">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Manage Privacy Settings</button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Download My Data</button>
            </div>

            {/* Questions or Concerns */}
            <h2 className="text-xl font-semibold mb-4">Questions or Concerns?</h2>
            <p className="mb-2"><a href="mailto:privacy@alumniconnect.com" className="text-blue-500 hover:underline">privacy@alumniconnect.com</a></p>
            <p className="text-gray-600">Our Data Protection Team is here to help</p>
        </div>
    );
};

export default Privacy;