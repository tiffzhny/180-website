import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          180DC
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 space-x-2">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team" >Team</Link></li>
          <li><Link to="/join">Join Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

          
        </ul>
      </div>
    </div>
  );
}
