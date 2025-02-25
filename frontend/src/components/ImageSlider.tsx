import * as React from "react";
import { useState, useEffect } from 'react';

const slides = [
    { id: 1, image: "/alum_1.jpg", text: "Graduation Day" },
    { id: 2, image: "/alum_2.jpg", text: "Students Celebrating" },
    { id: 3, image: "/alum_3.jpg", text: "Alumni Networking" },
];

const ImageSlider:React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].text} className="w-full h-full object-cover" />
        </div>
    );
}

export default ImageSlider
