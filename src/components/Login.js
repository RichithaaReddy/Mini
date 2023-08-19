import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import swal from 'sweetalert';
export default function Login() {
  const navigate = useNavigate();
  const send = () => {
    navigate("/dashboard/student");
  };
  const adminsend = () => {
    navigate("/admin/dashboard");
    localStorage.setItem("admin", "789654jdvbjhfbhsfvdjzsfvsjzvfhjzvfszh");
  };
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    if (user.email === "admin@placify.com" && user.password === "admin@123") {
      adminsend();
    } else {
      try {
        const response = await axios.post("http://localhost:5000/login", user);
        console.log("response", response.data);
        
        if (response.data.status === "Invalid credentials") {
          swal("Invalid credentials");
        } else if (response.data.status === "enter all fields") {
          swal("Enter all fields");
        } else {
          localStorage.setItem("token", response.data.status);
          send();
        }
      } catch (error) {
        console.error("Error while logging in:", error);
        swal("An error occurred while logging in.");
      }
    }
  }
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
      <Navbar />
      <div className="relative pt-[11vh] rounded-sm flex flex-col justify-center min-h-screen overflow-hidden">
        <div style={style}>
          <div className="w-full p-6 m-auto bg-white mt-[15vh]  rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl tracking-wider text-center  font-serif text-violet-950 ">
              PLACIFY
            </h1>
           
            <form method="POST" className="pt-6">
              <div className="mb-6">
                
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  onChange={handleInput}
                  required
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
            
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  id="password"
                  onChange={handleInput}
                  required
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <Link to="/" className="text-xs text-purple-600 hover:underline">
                Forget Password?
              </Link>
              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p>{msg}</p>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Don't have an account?
              <Link
                to="/signup"
                className="font-medium text-purple-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        ;
      </div>
    </div>
  );
}
