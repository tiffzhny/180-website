import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="bg-white fixed top-0 left-0 w-full shadow z-50">
            <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-green-600">
                    180
                </div>

                {/* Links */}
                <div className="space-x-15 hidden md:flex">
                <Link to="/" className="text-black hover:text-gray-600">Home</Link>
                <Link to="/about" className="text-black hover:text-gray-600">About</Link>
                <Link to="/team" className="text-black hover:text-gray-600">Team</Link>
                <Link to="/join" className="text-black hover:text-gray-600">Join Us</Link>
                <a href="#our_services" className="text-black hover:text-gray-600">Our Services</a>
                </div>

                {/* Join Button */}
                <a href="#join" className="hidden md:inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Contact Us
                </a>

            </div>
        </nav>
    );
}