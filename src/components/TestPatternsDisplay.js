import React, {useEffect,useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const TestPatternsDisplay = () => {
    const [companies,setcompanies] = useState([]);
    useEffect(()=>{
        const status = axios.get("http://localhost:5000/testpatternsdisplay").then((res)=>{
            console.log(res);
            setcompanies(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>  <div class=" mt-10 w-full">
    <br />
    <br />
    <br />
    <br />
    <h1 className="text-3xl text-center font-semibold">
      Test Patterns
    </h1>
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