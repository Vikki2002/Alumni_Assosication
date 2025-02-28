import React from "react";

const Carousel: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-auto">
            <div className="carousel rounded-box w-full">
                {[
                    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
                    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
                    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
                    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
                    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
                    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
                    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
                ].map((src, index) => (
                    <div key={index} className="carousel-item mr-1">
                        <img src={src} alt={`Carousel ${index + 1}`} className="w-64 h-[320px] rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
