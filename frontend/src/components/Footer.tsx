import 'remixicon/fonts/remixicon.css'


const Footer = () => {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg text-black font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-indigo-500">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/events" className="hover:underline">Events</a></li>
                        <li><a href="/jobs" className="hover:underline">Job Portal</a></li>
                        <li><a href="/directory" className="hover:underline">Alumni Directory</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg text-black font-semibold">About This Site</h3>
                    <ul className='mt-2 space-y-2 text-indigo-500'>
                        <li>About</li>
                        <li>Privacy policy</li>
                        <li>Terms</li>
                    </ul>
                    
                </div>

                {/* Social Links & Copyright */}
                <div>
                    <h3 className="text-lg text-black font-semibold">Follow Us</h3>
                    <div className="mt-2 flex space-x-4">
                        <i className="ri-facebook-box-fill w-[18px] h-[18px]" style={{ color: "#1F03F0" }}></i>
                        <i className="ri-instagram-line w-[18px] h-[18px]" style={{ color: "#e4123f" }}></i>
                        <i className="ri-twitter-line w-[18px] h-[18px]" style={{ color: "#1a75ec" }}></i>
                    </div>
                </div>

            </div>
            <p className="mt-4 text-[24px] text-center">&copy; 2025 Government Engineering College Alumni Association</p>
        </footer>
    );
};

export default Footer;
