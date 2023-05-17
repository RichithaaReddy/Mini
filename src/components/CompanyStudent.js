import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Company = () => {
    const navigate = useNavigate();
    const [company,setcompany] = useState('');
    const [cid,setcid] = useState('');
    let {id} = useParams();
    console.log( "id is ",id);
    useEffect(()=>{
         const url = "http://localhost:5000/testpatternsdisplay/"+id;
        console.log("url is " , url);
        const d = axios.get(url).then((res)=>{
        console.log(res.data[0]);
        setcompany(res.data[0]);
        console.log(res.data[0].companyname);
        console.log("usestate",)
    }).catch((err)=>{
        console.log(err);
    })
    },[id])

  return (
    <div className="min-h-screen">
      <div className="mx-7 pt-[14vh] ">
        <div className="mx-3">
          {company ? <h1 className=" text-gray-800 font-semibold my-3 text-2xl">
            {company.companyname} Test Pattern
          </h1> : null }
          <p className="">
            All the details given in the table are a rough estimate. The number
            of questions and time duration depends and may vary on the
            respective companies for which the exam is being conducted.
          </p>
        </div>
        <div className="container mx-auto mt-7 px-4   py-8 ">
          <table className="w-full text-sm text-center shadow ring-1 ring-black ring-opacity-5 text-gray-900 divide-y divide-gray-300 md:rounded-lg">
            <thead className="text-xs text-center  text-gray-900 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900  ">
                  Section
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 ">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 ">
                  No of Questions
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 ">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 ">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {company ? company.testsections.map((item, index) => (
                <tr key={index} className="bg-white ">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.section}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                    {item.noofques}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                    {item.difficulty.length > 0 ? item.difficulty : "Varies"}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                    {item.duration}
                  </td>
                </tr>
              )) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Company