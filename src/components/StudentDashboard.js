import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { GoSearch } from 'react-icons/Go';
import axios from "axios";
import Navbar from "./Navbar";

const StudentDashboard = () => {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [testcount, settestcount] = useState("");
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin");
   navigate("/");
 }
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
    var token = (localStorage.getItem("token"));
    const url = "http://localhost:5000/getIndividualStudent/"+token;
    const data = axios.get(url).then((res)=>{
      console.log('data', res.data[0].name)
      setname(res.data[0].name);
      setemail(res.data[0].email);
    })
  }, []);

  return (
    <div>
     {/* <Navbar/> */}
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
            <Link to="/admin/dashboard" className="text-cyan-700 hover:text-cyan-800">
              Dashboard
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/admin/testpatternsdisplay" className="text-cyan-700 hover:text-cyan-800">
              Test patterns
            </Link>
          </li>
          <li className="ml-4 text-cyan-700 hover:text-cyan-800">
              <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
      <div className="min-h-screen mt-[11vh]">
        <div className="bg-gray-50 flex">
          <div className="bg-gray-800 h-screen text-white text-left p-5">
            <div className="text-left pl-3 bg-white rounded-md text-black p-">
              <div className="p-5">
                <img
                  className="rounded-full"
                  src="data:image/png;base64,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"
                />
              </div>
              <p className="font-semibold text-xl">{name}</p>
              <p className="text-base ">{email}</p>
              <p className="text-base pb-2 font-semibold t">RANK : 20/100 </p>
            </div>
            <p className="text-center font-semibold pt-5 tracking-wide">
              OVERALL ANALYSIS
            </p>
            <table>
              <thead>
                <tr>
                  <th className="px-3 py-3">Data</th>
                  <th className="px-3 py-3">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-3">Total testPatterns</td>
                  <td className="px-3 py-3">{testcount}</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Number of Mocktests</td>
                  <td className="px-3 py-3">3</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Aptitude Score</td>
                  <td className="px-3 py-3">10</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Verbal Score</td>
                  <td className="px-3 py-3">10</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Technical quiz Score</td>
                  <td className="px-3 py-3">10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-200 w-full">
            <div className=" ">
              <div className="flex m-auto md:relative pt-3 items-center rounded-lg flex-wrap sm:pl-8 md:pl-0 ">
                <h1 className="mt-8 md:mx-6 text-2xl font-bold mb-4  mx-4 md:pl-0">
                  {" "}
                  TAKE MOCK TESTS
                </h1>
              </div>

              <div className="w-full ">
                <div className="flex justify-center">
                  <div className=" grid min-[300px]:grid-cols-2 grid-cols-1 gap-1 mx-2 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mb-9">
                    <Link to="/MockTestQuant">
                      <div className="mx-5 h-[45mm] my-3 bg-white rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                        <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrnarP4eOqDh2W1bVIBYG0KBd6cHGXco4i8OVE9A4kw&ec=48665701"
                            height={100}
                            width={200}
                          />
                        </div>
                        <div className="mt-4 flex justify-center">
                          <h3 className="text-lg font-semibold  text-gray-700">
                            Quantitaive Aptitude
                          </h3>
                        </div>
                      </div>
                    </Link>

                    <Link to="/MockTestVerbal">
                      <div className="mx-5 my-3 h-[45mm] bg-white rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                        <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkutlzUwvtKcouazhxylf3sGc6fYWQB7l_uA1TUZVLQ&ec=48665701"
                            height={100}
                            width={200}
                          />
                        </div>
                        <div className="mt-4 flex justify-center">
                          <h3 className="text-lg font-semibold text-gray-700">
                            Verbal
                          </h3>
                        </div>
                      </div>
                    </Link>

                    <Link to="/MockTestTech">
                      <div className="mx-5 my-3 h-[45mm] bg-white rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                        <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                          <img
                            src="data:image/jpeg;base64,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"
                            height={100}
                            width={200}
                          />
                        </div>

                        <div className="mt-4 flex justify-center">
                          <h3 className="text-lg font-semibold text-gray-700">
                            Technical Quiz
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div>
                <Link to="/Email">
                  <h1 className="mt-8 md:mx-6 text-2xl font-bold mb-4  mx-4 md:pl-0 text-start">
                    SAMPLE FORMATS
                  </h1>
                  <div className="mx-5 my-3 h-[65mm] w-[45mm] bg-white rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                    <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                      <img
                        src="https://images.template.net/wp-content/uploads/2018/11/Free-Formal-Letter-Example.jpg"
                        height={100}
                        width={200}
                      />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Email Writing
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mt-10 pt-7" >
                <Link to="/Gd">
                  <div className="mx-5 my-3 h-[65mm] w-[45mm] bg-white rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                    <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                      <img
                        src="https://images.template.net/wp-content/uploads/2018/11/Free-Formal-Letter-Example.jpg"
                        height={100}
                        width={200}
                      />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <h3 className="text-lg font-semibold text-gray-700">
                        GD RULES
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
