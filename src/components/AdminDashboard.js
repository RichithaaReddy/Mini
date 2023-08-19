import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AdminDashboard = () => {
  const [usercount,setusercount] = useState('');
  const[users,setusers] = useState([]);
  const [testcount,settestcount] = useState('');
  // const [count,setCount] = useState(0)
  var count=0
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/Login");
    }
    const stat = axios.get("http://localhost:5000/getusers").then((res)=>{
      console.log(res);
      console.log(res.data);
      setusercount(res.data.length);
      setusers(res.data);
    }).catch((res)=>{
      console.log(res)
    })
    const testdet = axios.get("http://localhost:5000/testpatterns").then((res)=>{
      console.log(res);
      settestcount(res.data.length);
    }).catch((err)=>{
      console.log(err)
    })

  }, []);

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
                to="/admin/dashboard"
                className="text-cyan-700 hover:text-cyan-800"
              >
                Dashboard
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/admin/testpatternsdisplay"
                className="text-cyan-700 hover:text-cyan-800"
              >
                Test Patterns
              </Link>
            </li>
            {/* <li className="ml-4">
            <Link to="/Login" className="text-cyan-700 hover:text-cyan-800">
              Contact us
            </Link>
          </li> */}
            <li className="ml-4 text-cyan-700 hover:text-cyan-800 cursor-auto">
              <a onClick={logout}>Logout</a>
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
          <div className="bg-gray-800 h-auto text-white text-left p-5">
            <p className="text-center font-semibold tracking-wide">
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
                  <td className="px-3 py-3">Number of Users</td>
                  <td className="px-3 py-3">{usercount}</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Number of Companies Registered</td>
                  <td className="px-3 py-3">{testcount}</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Total Testpatterns Available</td>
                  <td className="px-3 py-3">{testcount}</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Number of Mocktests</td>
                  <td className="px-3 py-3">3</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Test Taken By Users</td>
                  <td className="px-3 py-3">10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 w-full">
            <div className="mx-5">
              <div className="flex m-auto md:relative pt-3 items-center rounded-lg flex-wrap sm:pl-8 md:pl-0 ">
                <h1 className="mt-8 md:mx-6 text-2xl font-bold mb-4  mx-4 md:pl-0">
                  {" "}
                  STUDENTS DATA
                </h1>
                <div className="flex md:absolute md:right-0  md:mx-2 ">
                  <div className="right-1 flex mx-3 mt-4 bg-gray-200 px-3  rounded-md">
                    {/* <GoSearch className="mt-2 text-lg" /> */}
                    <input
                      className="w-full p-3 bg-gray-200 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm"
                      type="text"
                      placeholder="Search using PlacifyId..."
                    />
                  </div>
                  <div>
                    <select
                      className="border p-3 border-gray-300 mt-4 rounded-md  text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0"
                    >
                      <option>Filter by</option>
                      <option>Rank</option>
                      <option>Number of MockTest</option>
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
                      <th className="px-6 py-3 text-left text-base text-white font-medium   uppercase tracking-wider">
                        PlacifyId
                      </th>
                      <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                        EmailId
                      </th>
                      <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                        Number Of MockTests
                      </th>
                      {/* <th className="px-6 py-3 text-left text-base text-white font-medium  uppercase tracking-wider">
                  Status
                </th> */}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-gray-300">
                   {users &&  users.map((user)=>{
                    return (
                        <tr className="hover:bg-gray-100 border-b border-gray-500">
                          <td className="px-6 py-4 text-left whitespace-nowrap font-mono  text-red-400">
                            
                            {count+=1}
                          </td>
                          <td className="px-6 py-4 text-left whitespace-nowrap text-gray-800">
                            {user._id}
                          </td>
    
                          <td className="px-6 py-4 text-left whitespace-nowrap text-green-500">
                            {user.email}
                          </td>
    
                          <td className="px-6 py-4 whitespace-nowrap text-left">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 font-semibold whitespace-nowrap text-green-600">
                            3
                          </td>
                      </tr>)
                   })}
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
