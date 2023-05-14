import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white sticky flex justify-between items-center h-12 md:h-16">
      <Link
        to="/"
        className="text-blue-800 tracking-wider md:text-2xl font-bold  ml-8 font-mono"
      >
        PLACIFY
      </Link>
      <div className="m-auto">
        <ul className="flex">
          <li className="ml-4">
            <Link to="/" className="text-cyan-700 hover:text-cyan-800">
              Home
            </Link>
          </li>
          {/* <li className="ml-4">
            <Link to="/About" className="text-cyan-700 hover:text-cyan-800">
              About
            </Link>
          </li> */}
          {/* <li className="ml-4">
            <Link to="/Login" className="text-cyan-700 hover:text-cyan-800">
              Contact us
            </Link>
          </li> */}
          <li className="ml-4">
            <Link to="/Login" className="text-cyan-700 hover:text-cyan-800">
              Login
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/Signup" className="text-cyan-700 hover:text-cyan-800">
              Signup
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/help" className="text-cyan-700 hover:text-cyan-800">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
