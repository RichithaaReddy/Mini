import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
const Company = () => {
    const [company,setcompany] = useState('');
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
    })
  return (
    <div>
       <h1>{id}</h1>
  </div>
  )
}

export default Company