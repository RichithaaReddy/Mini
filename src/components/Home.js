import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <div className="mt-[11vh]">
        {/* Place your background image */}
        <div className="z-0 ">
          <img
            src="https://bishopco.net/wp-content/uploads/2019/09/3-Reasons-a-College-Degree-Helps-You-Get-to-the-Interview-Stage.jpg"
            alt=""
            className="w-screen"
          />
        </div>

        {/* Your main content */}
        <div className="home absolute top-32 mt-10 w-[50%] px-36">
          <div className="">
            <h1 className="text-5xl font-serif mb-8">
              Placement Preparation Portal
            </h1>
            <p className="text-md text-gray-800 font-semibold mb-8">
              Placement is a crucial milestone in a student's life, as it
              determines their future career prospects. To secure a placement in
              a reputable IT company, students must dedicate themselves to
              thorough preparation. This involves understanding the various test
              patterns that different companies employ, such as the inclusion of
              sections on aptitude and coding. While there are numerous websites
              that offer information on these topics individually, there is
              currently no platform that consolidates information about specific
              company test patterns.
            </p>
          </div>
          <div className="flex justify-between font-serif">
            <Link
              className="bg-gradient-to-t from-violet-500 via-violet-600 to-violet-700 text-white px-8 py-4 rounded-lg hover:-translate-y-2 ease-in-out duration-300"
              to="/login"
            >
              Test Patterns
            </Link>
            <Link
              className="bg-gradient-to-t from-violet-500 via-violet-600 to-violet-700 text-white px-8 py-4 rounded-lg hover:-translate-y-2 ease-in-out duration-300"
              to="/login"
            >
              Mock Test
            </Link>
          </div>
        </div>
        <div className="">
        <div className="z-0 ">
          <img
            src="https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-166.jpg?w=360"
            alt=""
            className="w-screen opacity-40 h-[120mm]"
          />
        </div>

          <div className="px-[20%] absolute top-[115%] font-semibold text-violet-950 text-3xl font-serif tracking-wide">
            "Thorough preparation is the key to securing a reputable IT company
            placement, as it involves understanding test patterns and
            company-specific information."
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Home;
