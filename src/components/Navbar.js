import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // const user = useUser();

  return (
    <div>
      <div className="border-b border-gray-300 py-2 fixed top-[-7px] w-[100%] z-40 bg-slate-50">
        <div className="flex items-center justify-between  flex-wrap ">
          <div className="navbar fixed top-0 z-50 py-4 px-5 font-serif bg-transparent backdrop-filter backdrop-blur-lg shadow-md w-full">
            <div className="relative grid grid-cols-2 items-center">
              <p className="py-1 mr-80 text-4xl " to="#">
                PLACIFY
              </p>
              <div className="flex gap-2 mx-10 text-lg aLinkgn-text-bottom">
                <Link
                  className="px-6 py-3  cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className="px-6 py-3 cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="px-6 py-3 cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="px-6 py-3 cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  to="/signup"
                >
                  Register
                </Link>
                <Link
                  className="px-6 py-3 cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
