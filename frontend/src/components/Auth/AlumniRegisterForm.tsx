import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const AlumniRegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    // State management
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        graduationYear: "",
        fieldOfStudy: "",
        currentCompany: "",
        jobTitle: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Form validation
    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
        if (!formData.graduationYear.trim() || isNaN(Number(formData.graduationYear))) {
            newErrors.graduationYear = "Enter a valid graduation year";
        }
        if (!formData.fieldOfStudy.trim()) newErrors.fieldOfStudy = "Field of study is required";
        if (!formData.currentCompany.trim()) newErrors.currentCompany = "Current company is required";
        if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log(formData)

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            // alert("Registration successful!");
            setIsSubmitting(false);
            setFormData({
                fullName: "",
                email: "",
                password: "",
                graduationYear: "",
                fieldOfStudy: "",
                currentCompany: "",
                jobTitle: "",
            });
        }, 1000);
        navigate("/alumni/successfull")
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 pt-[4rem] pb-8">
                <main className="max-w-3xl mx-auto p-8 rounded-lg shadow-md bg-white">
                    <h2 className="text-3xl font-bold mb-4 text-gray-700">Join AlumniConnect</h2>
                    <p className="text-gray-800 mb-8">Create your account to connect with fellow alumni</p>
                    <form onSubmit={handleSubmit}>
                        {/* Personal Information */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-600">Personal Information</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Enter your full name"
                                />
                                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Enter your email address"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Create a password"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>
                        </section>

                        {/* Academic Information */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-600">Academic Information</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Graduation Year</label>
                                <input
                                    type="text"
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Enter graduation year"
                                />
                                {errors.graduationYear && <p className="text-red-500 text-sm">{errors.graduationYear}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field of Study</label>
                                <input
                                    type="text"
                                    name="fieldOfStudy"
                                    value={formData.fieldOfStudy}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Enter your major/field of study"
                                />
                                {errors.fieldOfStudy && <p className="text-red-500 text-sm">{errors.fieldOfStudy}</p>}
                            </div>
                        </section>

                        {/* Professional Information */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-gray-600">Professional Information</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Current Company</label>
                                <input
                                    type="text"
                                    name="currentCompany"
                                    value={formData.currentCompany}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Enter company name"
                                />
                                {errors.currentCompany && <p className="text-red-500 text-sm">{errors.currentCompany}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 text-gray-900 bg-gray-100"
                                    placeholder="Enter your job title"
                                />
                                {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
                            </div>
                        </section>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Create Account"}
                        </button>
                        <p className="text-gray-600 text-sm mt-4">
                            By creating an account, you agree to our
                            <a href="#" className="text-green-500 hover:underline"> Terms of Service</a> and
                            <a href="#" className="text-green-500 hover:underline"> Privacy Policy</a>.
                        </p>
                    </form>
                </main>
            </div>
        </>
    );
};

export default AlumniRegistrationForm;
