import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="bg-black p-3 border-b-2 border-white">
                <ul className="flex items-center space-x-10 justify-end px-20 py-2 text-white font-old-english text-[32px]">
                    <p className="mr-auto">Andrea Mesa</p>
                    <li className="first:text-pink-500">
                        <Link to="/" className="text-gray-900 dark:text-white hover:underline">
                            Home
                        </Link>
                    </li>
                    <li><a href="about.html">Models</a></li>
                    <li><a href="contact.html">Products</a></li>
                    <li><a href="contact.html">Events</a></li>
                    <button className="border border-white rounded-lg px-4 py-2 text-white hover:bg-white hover:text-black">Log In</button>
                    <button className="border border-white rounded-lg px-4 py-2 text-white hover:bg-white hover:text-black">Sign In</button>
                </ul>
            </nav>
        </>
    );
}
export default NavBar;