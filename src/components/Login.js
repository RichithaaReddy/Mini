import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const send = () => {
    navigate("/testpatterns");
  };
  const [msg,setMsg] = useState('')
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    const status = axios
      .post("http://localhost:5000/login", user)
      .then((res) => {
        if (res.data.message === "login successfull") {
          send();
        } else if (res.message === 'Request failed with status code 400') {
          window.alert("Invalid credentials");
          setMsg("invalid credentials")
        }
      });
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
            <Link to="/About" className="text-cyan-700 hover:text-cyan-800">
              About
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/Testpatterns" className="text-cyan-700 hover:text-cyan-800">
              Test patterns
            </Link>
          </li>
          {/* <li className="ml-4">
            <Link to="/Login" className="text-cyan-700 hover:text-cyan-800">
              Contact us
            </Link>
          </li> */}
          <li className="ml-4">
            <Link to="/Login" className="text-cyan-700 hover:text-cyan-800">
              Login
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/Signup" className="text-cyan-700 hover:text-cyan-800">
              Signup
            </Link>
          </li>
          <li className="ml-4">
            <Link to="/help" className="text-cyan-700 hover:text-cyan-800">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div style={style}>
        <div className="w-full p-6 m-auto bg-white mt-[15vh]  rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form method="POST" className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
                >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInput}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
                >
                Password
              </label>
              <input
                type="password"
                name="password"
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
              to="/"
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
