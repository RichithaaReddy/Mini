import React from "react";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
   
    
  return (
    <div>
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
              <Link
                to="/AdminDashboard"
                className="text-cyan-700 hover:text-cyan-800"
              >
                Dashboard
              </Link>
            </li>
            <li className="ml-4">
              <Link to="/About" className="text-cyan-700 hover:text-cyan-800">
                About
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/TestPatternsDisplay"
                className="text-cyan-700 hover:text-cyan-800"
              >
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
                Logout
              </Link>
            </li>
            {/* <li className="ml-4">
            <Link to="/Signup" className="text-cyan-700 hover:text-cyan-800">
              Signup
            </Link>
          </li> */}
          </ul>
        </div>
      </nav>
      <div className="min-h-screen">
        <div className="bg-gray-50 flex">
          <div className="bg-gray-800 text-white text-left p-5">
            <p className="text-center font-semibold tracking-wide">OVERALL  ANALYSIS</p>
            <table >
                <thead>
                    <tr>
                       <th className="px-3 py-3">Data</th>
                       <th className="px-3 py-3">Values</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
      <td className="px-3 py-3">Number of Users</td>
      <td className="px-3 py-3">61</td>
    </tr>
    <tr>
    <td className="px-3 py-3">Number of Companies</td>
      <td className="px-3 py-3">10</td>
    </tr>
    <tr>
    <td className="px-3 py-3">Total Testpatterns</td>
      <td className="px-3 py-3">10</td>
    </tr>
    <tr>
    <td className="px-3 py-3">Number of Mocktests</td>
      <td className="px-3 py-3">1</td>
    </tr>
    <tr>
    <td className="px-3 py-3">Test Taken By Users</td>
      <td className="px-3 py-3">10</td>
    </tr>
    <tr>
    <td className="px-3 py-3">Total Testpatterns</td>
      <td className="px-3 py-3">10</td>
    </tr>

  </tbody>
            </table>
            <p></p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
