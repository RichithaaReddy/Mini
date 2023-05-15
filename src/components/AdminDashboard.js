import React from "react";
import { Link } from "react-router-dom";
// import { GoSearch } from 'react-icons/Go';

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
          <div className="bg-gray-800 h-screen text-white text-left p-5">
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
          </div>
          <div className="bg-gray-50 w-full">
          <div className=" ">
        <div className="flex m-auto md:relative pt-3 items-center rounded-lg flex-wrap sm:pl-8 md:pl-0 ">
          <h1 className="mt-8 md:mx-6 text-2xl font-bold mb-4  mx-4 md:pl-0"> STUDENTS DATA</h1>
          <div className="flex md:absolute md:right-0  md:mx-2 ">
            <div className="right-1 flex mx-3 mt-4 bg-gray-200 px-3  rounded-md">
              {/* <GoSearch className="mt-2 text-lg" /> */}
              <input
                className="w-full p-3 bg-gray-200 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm"
                type="text"
                placeholder="Search a transaction..."
              />
            </div>
            <div>
              <select
                className="border p-3 border-gray-300 mt-4 rounded-md  text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0"
              >
                <option>Filter by</option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="bg-sky-700 ">
                <th className="px-6 py-3 text-left text-base text-white font-medium   uppercase tracking-wider">
                   Rank
                </th>
                <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                  EmailId
                </th>
                <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                  Marks
                </th>
                {/* <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                  Status
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-gray-300">
                  <tr className="hover:bg-gray-100 border-b border-gray-500">
                    <td className="px-6 py-4 text-left whitespace-nowrap font-mono  text-red-400">
                      paymentId
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-gray-800">
                     11/4/23
                    </td>
                    
                      <td className="px-6 py-4 text-left whitespace-nowrap text-green-500">
                        plan
                      </td>
                  
                    
                    <td className="px-6 py-4 whitespace-nowrap text-left">₹100</td>
                    <td className="px-6 py-4 font-semibold whitespace-nowrap text-green-600">
                    
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
