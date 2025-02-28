import React from "react";
import { jsPDF } from "jspdf";

const TermsOfServices: React.FC = () => {
    // Define the terms array
    const terms = [
        { title: "1. Acceptance of Terms", text: "By accessing and using AlumniConnect, you agree to be bound by these Terms of Service and all applicable laws and regulations." },
        { title: "2. User Responsibilities", text: "Members must provide accurate information, maintain profile authenticity, and engage respectfully with the community." },
        { title: "3. Privacy and Data", text: "We protect your personal information as outlined in our Privacy Policy. Your use of the platform indicates acceptance of our data practices." },
        { title: "4. Platform Rules", text: "Users must not misuse the platform, share inappropriate content, or engage in behavior that violates our community guidelines." }
    ];

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text("Terms of Service", 20, 20);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Last Updated: January 2024", 20, 30);

        let yOffset = 40; // Initial vertical position
        terms.forEach(({ title, text }) => {
            doc.setFont("helvetica", "bold");
            doc.text(title, 20, yOffset);
            yOffset += 7;
            doc.setFont("helvetica", "normal");
            doc.text(text, 20, yOffset, { maxWidth: 170 });
            yOffset += 10;
        });

        doc.save("TermsOfService.pdf");
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-500 mb-6">Last Updated: January 2024</p>
            <div className="space-y-6">
                {terms.map((term, index) => (
                    <div key={index} className="bg-green-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
                        <p className="text-gray-700">{term.text}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <button
                    onClick={generatePDF}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                    <i className="fas fa-file-download mr-2"></i> Download Full Terms (PDF)
                </button>
            </div>
        </div>
    );
};

export default TermsOfServices;
