import Footer from "../Footer"
import ImageSlider from "../ImageSlider"


const HeroSection = () => {
    return (<>
        <div className="relative w-full h-screen">
            <ImageSlider />
            <div className="absolute top-[14rem] left-[3.5rem] md:left-[7rem] lg:left-[14rem]">
                <div className="flex flex-col justify-center items-center gap-3 bg-black bg-opacity-35 rounded-[5px] p-4 w-[80%] h-auto">
                    <h2 className="text-white font-bold text-[24px] text-center">👉 Stay Connected. Give Back. Grow Together.</h2>
                    <p className="text-white font-bold text-center">Join the official alumni network of Engineering College and reconnect with old friends, explore career opportunities, and support the next generation of students.</p>
                    <button className="bg-blue-300 text-gray-900 font-bold text-[18px] rounded-[5px] w-[7rem] h-[3rem]">Join Now</button>
                </div>
            </div>
        </div>
        <section className="relative w-full text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Community Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-[5rem] lg:px-[10rem]">
                <div className="bg-teal-400 p-4 rounded">
                    <i className="fas fa-users text-teal-500 text-2xl mb-2">
                    </i>
                    <p className="text-xl font-bold">
                        10K+
                    </p>
                    <p>
                        Active Alumni Members
                    </p>
                </div>
                <div className="bg-teal-400 p-4 rounded">
                    <i className="fas fa-handshake text-teal-500 text-2xl mb-2">
                    </i>
                    <p className="text-xl font-bold">
                        500+
                    </p>
                    <p>
                        Mentorships Completed
                    </p>
                </div>
                <div className="bg-teal-400 p-4 rounded">
                    <i className="fas fa-briefcase text-teal-500 text-2xl mb-2">
                    </i>
                    <p className="text-xl font-bold">
                        300+
                    </p>
                    <p>
                        Open Positions
                    </p>
                </div>
                <div className="bg-teal-400 p-4 rounded">
                    <i className="fas fa-dollar-sign text-teal-500 text-2xl mb-2">
                    </i>
                    <p className="text-xl font-bold">
                        $500K+
                    </p>
                    <p>
                        Donations Raised
                    </p>
                </div>
            </div>
        </section>
        <Footer />
    </>)
}

export default HeroSection