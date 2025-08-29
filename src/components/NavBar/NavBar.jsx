import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/'; 

  return (
    <div className={`navbar fixed top-0 w-full z-50 bg-transparent ${isHome ? 'text-white' : 'text-white'}`}>
      <div className="flex-1">
        <Link to="/" className="btn btn-link normal-case text-xl">
          <img
            src={isHome ? '/images/180logo.png' : '/images/180logo.png'}
            alt="180DC Logo"
            className="pt-2 h-15 w-auto"
          />
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 space-x-2">
          <li>
            <Link to="/team" className="hover:text-gray-300 transition-colors">Team</Link>
          </li>
          <li>
            <Link to="/students" className="hover:text-gray-300 transition-colors">For Students</Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-gray-300 transition-colors">For Clients</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
