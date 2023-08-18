import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const About = () => {
  const backgroundImageUrl = "";
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
      <div className="min-h-screen pt-[11vh]">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div style={style}>
            {/* <h1 className="text-3xl font-semibold text-center text-black-700 pt-[30px]">
                ABOUT US
              </h1> */}
            <div className="flex">
              <div className=" ml-5 pl-24 justify-start w-full pt-[50px]">
                <img
                  className="w-[90%] mt-[-40px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_jJHuECsItxuBnv_Zu0wRyJMFBrpz4C-eqr6WKwBrhn-_yjrz9gI9nsn1pMW6wrzqUY"
                />
                <p className="pt-[10px] font-semibold bg-gradient-to-r  from-sky-500 to-yellow-500 text-transparent bg-clip-text">
                  Introducing our professional website, designed to optimize
                  placement preparation for students. The platform comprises two
                  main sections: "View Test Patterns" and "Take Mock Test."
                  Under the "View Test Patterns" section, students can access
                  test patterns from various companies. The "Take Mock Test"
                  feature enables them to attempt mock tests and receive
                  detailed test reports upon completion. Our website serves as a
                  centralized hub for test patterns, streamlining the
                  preparation process and providing students with valuable tools
                  for placement success.
                </p>
              </div>
              <div className=" mr-5 pt-16 pr-28 h-[150mm] flex justify-end w-full">
                <img
                  src="https://media.istockphoto.com/id/1295756885/vector/business-people-vector-illustration-group-of-two-women-and-one-man-at-work-people-at-work.jpg?s=612x612&w=0&k=20&c=ZKcUNq20CGobvqhwCSM5BSAeDcjo9BKYm5Jx4qw3SqI="
                  alt="placement"
                  className="rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
