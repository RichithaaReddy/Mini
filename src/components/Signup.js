import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import axios from "axios";
export default function Signup() {
  const navigate = useNavigate();
  const send = ()=>{
    navigate('/login')
  }
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone:"",
    college: {
      name: "",
      specialisation:""
    },
    
  });
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log("user",user)
    const { name, email, password, cpassword } = user;
    // const res = await fetch("/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, password, cpassword }),
    // });
    // const data = await res.json();
    // if(res.status === 422 || !data){
    //   window.alert("Invalid registration")
    //   console.log("Invalid registration")
    // }
    // else{
    //   window.alert("Registration Success")
    //   console.log("Registration Success")
    //   navigate.push("/Login")
    // }
    const status = axios.post("http://localhost:5000/register",user).then((res)=>{
      if(res.data.message === "user registered sucessfully"){
        console.log(res.data)
        window.alert("Registration Success")
        console.log("Registration Success") 
       send();
      }
      else if(res.data.message === "Email exists"){
        window.alert("Email already exists")
      }
      else if(res.data.error === "Passwords do not match"){
        window.alert("Passwords dont match")
      }
      
  })
    .catch((err)=>{
      console.log(err)
    })
    
  };
  const backgroundImageUrl =
    "https://plus.unsplash.com/premium_photo-1668473365978-5f29069b0c6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";
  const style = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <div>
    <Navbar/>
    <div className="mt-[11vh] relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div style={style}>
        <div className="w-full p-6 m-auto bg-white mt-[15vh]  rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl tracking-wider text-center  font-serif text-violet-950 ">
              PLACIFY
            </h1>
          <form method="POST" className="mt-12">
            <div className="mb-4">
              
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Your FullName"
                value={user.name}
                onChange={handleInput}
                required
                className="block  w-full px-4 py-2 mt-2 text-violet-700 bg-white border rounded-md focus:border-violet-400 focus:ring-violet-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
                value={user.email}
                onChange={handleInput}
                required
                className="block w-full px-4 py-2 mt-2 text-violet-700 bg-white border rounded-md focus:border-violet-400 focus:ring-violet-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"

                value={user.password}
                onChange={handleInput}
                required
                className="block w-full px-4 py-2 mt-2 text-violet-700 bg-white border rounded-md focus:border-violet-400 focus:ring-violet-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password"

                value={user.cpassword}
                onChange={handleInput}
                required
                className="block w-full px-4 py-2 mt-2 text-violet-700 bg-white border rounded-md focus:border-violet-400 focus:ring-violet-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <input
                type="submit"
                name="signup"
                id="signup"
                value="Register"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-violet-700 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-600"
                onClick={postData}
              />
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Already registered?
            <Link
              to="/login"
              className="font-medium text-violet-600 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      ;
    </div>
    </div>
  );
}
