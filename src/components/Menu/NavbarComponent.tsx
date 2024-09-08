import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setIsAnimating(true);
        } else {
            setIsMenuOpen(true);
            setIsAnimating(true);
        }
    };

    useEffect(() => {
        if (isAnimating) {
            if (isClosing) {
                const timer = setTimeout(() => {
                    setIsMenuOpen(false);
                    setIsClosing(false);
                    setIsAnimating(false);
                }, 290); 
                return () => clearTimeout(timer);
            } else {
                setIsAnimating(false);
            }
        }
    }, [isAnimating, isClosing]);

    return (
        <nav className="bg-black p-3 border-b-2 border-white relative z-50">
            <div className="flex items-center justify-between px-20 py-2">
                <p className="text-white font-old-english text-[32px] mr-auto">Andrea Mesa</p>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex items-center space-x-10 text-white font-old-english text-[32px]">
                    <li className="first:text-pink-500">
                        <Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/Models">Models</Link>
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                    <li><a href="contact.html">Events</a></li>
                    <Link to="/LogIn" className="text-gray-900 dark:text-white hover:underline">
                        <button className="border border-white rounded-lg px-4 py-2 text-white hover:bg-white hover:text-black">Log In</button>
                    </Link>
                    <Link to="/SignIn" className="text-gray-900 dark:text-white hover:underline">
                        <button className="border border-white rounded-lg px-4 py-2 text-white hover:bg-white hover:text-black">Sign In</button>
                    </Link>
                </ul>
            </div>
            {/* Menú desplegable */}
            {(isMenuOpen || isAnimating) && (
                <div className={`lg:hidden absolute top-full left-0 w-full bg-black border-t border-white transition-all duration-300 ${isClosing ? 'animate-slideUp' : 'animate-slideDown'}`}>
                    <ul className="flex flex-col items-center text-white font-old-english text-[32px] space-y-4 py-4">
                        <li className="border-b border-white w-full text-center">
                            <Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
                        </li>
                        <li className="border-b border-white w-full text-center">
                            <Link to="/Models" className="text-gray-900 dark:text-white hover:underlines">Models</Link>
                        </li>
                        <li className="border-b border-white w-full text-center">
                            <Link to="/Products" className="text-gray-900 dark:text-white hover:underline">Products</Link>
                        </li>
                        <li className="border-b border-white w-full text-center">
                            <a href="contact.html">Events</a>
                        </li>
                        <li className="border-b border-white w-full text-center">
                            <Link to="/LogIn" className="text-gray-900 dark:text-white hover:underline">
                                <button className="w-full text-white hover:bg-white hover:text-black py-2">Log In</button>
                            </Link>
                        </li>
                        <li className="border-b border-white w-full text-center">
                            <Link to="/SignIn" className="text-gray-900 dark:text-white hover:underline">
                                <button className="w-full text-white hover:bg-white hover:text-black py-2">Sign In</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;