import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
const Company = () => {
    const [company,setcompany] = useState('');
    let {id} = useParams();
    useEffect(()=>{
    const url = "http://localhost:5000/testpatternsdisplay/"+id;
    console.log(url);
    const d = axios.get(url).then((res)=>{
        console.log(res.data[0]);
        setcompany(res.data[0]);
        console.log(res.data[0].companyname);
        console.log("usestate",)
    }).catch((err)=>{
        console.log(err);
    })
    })
  return (
    <div>
    <div className=" mt-[10vh] w-full">
      <div className="container mt-8 ">
          <div className="my-2 mx-auto">
              <b><h1 className="text-center my-4  text-gray-800 mt-[14vh] md:text-3xl text-2xl"><span className='text-orange-600 px-1'>{company.companyname}</span> Test Pattern.</h1></b>
              <p className='mx-3 md:mx-5 my-2 md:text-center text-left text-gray-700'>All the details given in the table are a rough estimate. The number of questions and time duration depends and may vary on the respective companies for which the exam is being conducted.</p>
          </div>
          <div className="flex justify-center mt-4 mx-2 ">
          <table className="mx-5 mt-5 p-3 sm:text-xs md:text-base text-left ring-black text-gray-900 dark:text-white shadow ring-1 ring-opacity-5 md:rounded-lg">
              <thead className="sm:text-[2px] md:text-base py-1 text-gray-900  bg-gray-100">
                  <tr>
                  <th className="px-1 md:px-6 md:py-3 lg:px-11 lg:py-5 ">Sno</th>
                  <th className="px-3 md:px-6 md:py-3 lg:px-11 lg:py-5 ">Title</th>
                  <th className="px-3 md:px-6 md:py-3 lg:px-11 lg:py-5 ">Number of Questions</th>
                  {/* <th className="px-1 md:px-6 md:py-3">Difficulty</th> */}
                  <th className="px-3 md:px-6 md:py-3 lg:px-11 lg:py-5 ">Duration</th>
                  </tr>
              </thead>
              <tbody>
                  {company.testsections.map((item, index) => (
                  <tr key={index} className="bg-white border-b sm:text-[2px] md:text-base ">
                      <td className="px-1 md:px-6 md:py-3 lg:px-11 lg:py-5 font-medium text-gray-700 whitespace-nowrap ">{item.section}</td>
                      <td className="px-3 md:px-6 md:py-3 lg:px-11 lg:py-5  font-medium text-gray-700 whitespace-nowrap ">{item.title}</td>
                      <td className="px-3 md:px-6 md:py-3 lg:px-11 lg:py-5  font-medium text-gray-500 whitespace-nowrap ">{item.noofques} Questions</td>
                      {/* <td className="px-1 md:px-6 md:py-3 font-medium text-gray-500 whitespace-nowrap ">{item.difficulty}</td> */}
                      <td className="px-1 md:px-6 md:py-3 lg:px-11 lg:py-5  font-medium text-gray-500 whitespace-nowrap">{item.duration} Minutes</td>
                  </tr>
                  ))}
              </tbody>
          </table>
          </div>
      </div>
      <br/><br/><br/>
      </div>
  </div>
  )
}

export default Company