import React, {useEffect,useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const TestPatternsDisplay = () => {
  const navigate = useNavigate();
    const [companies,setcompanies] = useState([]);
    useEffect(()=>{
        const status = axios.get("http://localhost:5000/testpatternsdisplay").then((res)=>{
            console.log(res);
            setcompanies(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    const logout = () => {
      localStorage.removeItem("admin");
     navigate("/");
   }
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
      <div class=" mt-10 w-full">
    <br />
    <br />
    <br />
    <br />
    <div className='realtive'>
    <span className="text-3xl font-bold ml-5 absolute left-8  ">
      Test Patterns
    </span>
    <Link to="/admin/testpatternsadd">
    <button className="text-xl mr-5 absolute right-16 bg-blue-500 p-3 rounded-md text-center font-semibold">
      Add Company
    </button></Link>
    </div>
    <br />
    <br />
    <div className="flex justify-center">
      <div className=" grid min-[300px]:grid-cols-2 grid-cols-1 gap-1 mx-2 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mb-5">
        {companies.map((company) => {
          return (
            <Link
              href={`/dashboard/student/testpatterns/${company.companyname}`}
            >
              <div className="mx-5 my-3 rounded shadow-md py-4 flex flex-col justify-between cursor-pointer">
                <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
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
  </div></div>
  )
}

export default TestPatternsDisplay