import React from "react";
import { Link } from "react-router-dom";
const Gdrules = () => {
  return (
    <div className="bg-gray-200">
         <nav className="bg-white sticky flex justify-between items-center h-12 md:h-16">
      <Link
        to="/"
        className="text-blue-800 tracking-wider md:text-2xl font-bold  ml-8 font-mono"
      >
        PLACIFY
      </Link>
      <div className="m-auto">
        <ul className="flex">
          {/* <li className="ml-4">
            <Link to="/About" className="text-cyan-700 hover:text-cyan-800">
              About
            </Link>
          </li> */}
          <li className="ml-4">
            <Link to="/dashboard/student/testpatterns" className="text-cyan-700 hover:text-cyan-800">
              Test patterns
            </Link>
          </li>
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
            <Link to="/Signup" className="text-cyan-700  hover:text-cyan-800">
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
    <div className="min-h-screen">
      <h1 className="md:mx-6 text-2xl font-bold mb-4  mx-4 md:pl-0 my-9">GROUP DISCUSSION CONSOLIDATED RULES</h1>
      <div className="m-14 text-start pl-20 text-lg ml-24">
        <p className="p-1 ">1. Respectful and constructive communication.</p>
        <p className="p-1 ">2. Active participation and equal involvement.</p>
        <p className="p-1 ">3. Open-mindedness and consideration of diverse perspectives.</p>
        <p className="p-1 ">4. Staying focused on the assigned topic.</p>
        <p className="p-1 ">5. Being mindful of time constraints.</p>
        <p className="p-1 ">6. Supporting statements with evidence.</p>
        <p className="p-1 ">7. Avoiding personal attacks and offensive language.</p>
        <p className="p-1 ">8. Actively listening and responding thoughtfully.</p>
        <p className="p-1 ">9. Flexibility and willingness to compromise.</p>
        <p className="p-1 ">10. Respecting confidentiality of shared information.</p>
      </div>
    </div></div>
  );
};

export default Gdrules;
