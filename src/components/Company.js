import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Company = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const { id } = useParams();

  const logout = () => {
    localStorage.removeItem('admin');
    navigate('/');
  };

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/Login');
    }
    const url = `http://localhost:5000/testpatternsdisplay/${id}`;

    axios
      .get(url)
      .then((res) => {
        setCompany(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="min-h-screen">
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
                  to="/AdminDashboard"
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
      <div className="mx-7 pt-24">
        <div className="mx-3">
          {company && (
            <h1 className="text-3xl uppercase font-serif tracking-wider  my-3 text-blue-800">
              {company.companyname} Test Pattern
            </h1>
          )}
          <p>
            <br />
            All the details given in the table are a rough estimate. The number
            of questions and time duration depends and may vary on the
            respective companies for which the exam is being conducted.
          </p>
          <div className="mt-4">
            {/* <center>
              <h4>Duration: {company?.duration}</h4>
              <h4>Overall Cutoff: {company?.overallcutoff}</h4>
            </center> */}
          </div>
        </div>
        <div className="container mx-auto mt-7 px-4 py-8">
          <table className="w-full text-sm mx-auto text-center shadow-lg bg-white border border-gray-300 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">
                  Section
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">
                  Title
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">
                  No of Questions
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {company &&
                company.testsections.map((item, index) => (
                  <tr key={index}  className="border-b text-left border-gray-300">
                    <td className="px-6 py-4 text-gray-900">{item.section}</td>
                    <td className="px-6 py-4 text-gray-900">{item.title}</td>
                    <td className="px-6 py-4 text-gray-900">{item.noofques}</td>
                    <td className="px-6 py-4 text-gray-900">
                      {item.difficulty.length > 0 ? item.difficulty : 'Varies'}
                    </td>
                    <td className="px-6 py-4 text-gray-900">{item.duration}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Company;
