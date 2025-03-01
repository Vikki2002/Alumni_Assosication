import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import About from "../components/shared/About";
import Privacy from "../components/shared/Privacy";
import TermsOfServices from "../components/shared/TermsOfServices";


const Home = () => {
    return (<>
        <Navbar />
        <div className="relative w-full h-screen">
            <ImageSlider />
            <div className="absolute top-[14rem] left-[3.5rem] md:left-[7rem] lg:left-[14rem]">
                <div className="flex flex-col justify-center items-center gap-3 bg-black bg-opacity-35 rounded-[5px] p-4 w-[80%] h-auto">
                    <h2 className="text-white font-bold text-[24px] text-center">👉 Stay Connected. Give Back. Grow Together.</h2>
                    <p className="text-white font-bold text-center">Join the official alumni network of Engineering College and reconnect with old friends, explore career opportunities, and support the next generation of students.</p>
                </div>
            </div>
        </div>
        <About />
        <TermsOfServices />
        <Privacy />
        <Footer />
    </>)
}

export default Home;