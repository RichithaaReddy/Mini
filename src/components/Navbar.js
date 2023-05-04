import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white sticky flex justify-between items-center h-12 md:h-16">
      <Link to="/" className="text-blue-800 tracking-wider md:text-2xl font-bold  ml-8 font-mono">PLACIFY</Link>
      <div className="m-auto">
        <ul className="flex">
          <li className="ml-6">
            <Link to="/" className="text-cyan-700 hover:text-cyan-800">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/about" className="text-cyan-700 hover:text-cyan-800">About</Link>
          </li>
          <li className="ml-6">
            <Link to="/contact" className="text-cyan-700 hover:text-cyan-800">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
