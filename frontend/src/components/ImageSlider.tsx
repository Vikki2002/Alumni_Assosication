import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function ImageSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true }) // Autoplay every 3s
    )

    const slides = [
        { id: 1, image: "/alum_1.jpg", text: "Graduation Day" },
        { id: 2, image: "/alum_2.jpg", text: "Students Celebrating" },
        { id: 3, image: "/alum_3.jpg", text: "Alumni Networking" },]

    return (
        <div className="relative w-full h-screen">
            <Carousel
                plugins={[plugin.current]}
                className="relative w-full h-screen"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className="w-full h-screen">
                            <div className="">
                                <Card className="overflow-hidden">
                                    <CardContent className="w-full h-screen">
                                        <img
                                            src={slide.image}
                                            alt={slide.text}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 bg-indigo-400 hover:bg-blue-700"/>
                <CarouselNext className="absolute right-5 bg-indigo-400 hover:bg-blue-700"/>
            </Carousel>
        </div>
    )
}
