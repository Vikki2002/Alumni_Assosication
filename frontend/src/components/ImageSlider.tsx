import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const slides = [
        { id: 1, image: "/alum_1.jpg", text: "Graduation Day" },
        { id: 2, image: "/alum_2.jpg", text: "Students Celebrating" },
        { id: 3, image: "/alum_3.jpg", text: "Alumni Networking" },
    ];

    return (
        <div className="relative w-full h-screen">
            <Carousel
                plugins={[plugin.current]}
                className="relative w-full h-screen"
                onMouseEnter={() => plugin.current?.stop?.()} // Ensure plugin is initialized
                onMouseLeave={() => plugin.current?.reset?.()} // Ensure plugin is initialized
            >
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className="w-full h-screen">
                            <Card className="overflow-hidden">
                                <CardContent className="w-full h-full p-0">
                                    <img
                                        src={slide.image}
                                        alt={slide.text}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-indigo-400 hover:bg-blue-700" />
                <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-indigo-400 hover:bg-blue-700" />
            </Carousel>
        </div>
    );
}
