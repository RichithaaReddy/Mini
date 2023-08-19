import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const TestPatternsDisplay = () => {
  const navigate = useNavigate();
  const [companies, setcompanies] = useState([]);
  useEffect(() => {
    const status = axios
      .get("http://localhost:5000/testpatternsdisplay")
      .then((res) => {
        console.log(res);
        setcompanies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  return (
    <div>
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
                  to="/dashboard/student"
                >
                  Dashboard
                </Link>
                <Link
                  className="px-6 py-3 cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  to="/admin/testpatternsdisplay"
                >
                  Test patterns
                </Link>
               
                <Link
                  className="px-6 py-3 cursor-pointer font-semibold hover:text-violet-700 hover:text-xl ease-in-out duration-300"
                  
                >
                  <a onClick={logout}>Logout</a>
                </Link>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
      
      <div className="min-h-screen bg-gray-100">
      <div class=" pt-14 w-full">
        <div className="realtive">
          <span className="text-3xl font-bold ml-5 absolute left-8  ">
            Test Patterns
          </span>
        </div>
        <br />
        <br />
        <div className="flex justify-center">
          <div className=" grid min-[300px]:grid-cols-2 grid-cols-1 gap-1 mx-2 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mb-5">
            {companies.map((company) => {
              return (
                <Link to={`/dashboard/student/testpatterns/${company.companyname}`}>
                  <div className="mx-5 my-3 rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                    <div className=" bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                      <img src={company.logo} height={100} width={200} />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {company.companyname}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TestPatternsDisplay;
