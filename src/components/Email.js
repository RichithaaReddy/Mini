import React from "react";
import { Link } from "react-router-dom";
const Email = () => {
  return (
    <div className="bg-slate-100">
         <nav className="bg-white sticky flex justify-between items-center h-12 md:h-16">
      <Link
        to="/"
        className="text-blue-800 tracking-wider md:text-2xl font-bold  ml-8 font-mono"
      >
        PLACIFY
      </Link>
      <div className="m-auto">
        <ul className="flex">
          {/* <li className="ml-4">
            <Link to="/About" className="text-cyan-700 hover:text-cyan-800">
              About
            </Link>
          </li> */}
          <li className="ml-4">
            <Link to="/dashboard/student/testpatterns" className="text-cyan-700 hover:text-cyan-800">
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
            <Link to="/Signup" className="text-cyan-700  hover:text-cyan-800">
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
      <div className="min-h-screen">
        <h1 className="mt-8 md:mx-6 text-2xl font-bold mb-4  mx-4 md:pl-0">
          EMAIL WRITING
        </h1>
        <div className="text-start mx-28 my-16 text-lg">
          <p>Subject: Request for Leave</p>

          <p className="pb-3">Dear [Recipient's Name],</p>

          <p className="pb-1">
            I hope this email finds you well. I am writing to formally request a
            leave of absence from [start date] to [end date]. The purpose of my
            leave is [mention the reason for your leave, e.g., personal
            matters/family obligations/medical reasons]. I have reviewed the
            company's leave policy and I believe I am entitled to [mention the
            number of days you are applying for] days of paid/unpaid leave, as
            per the policy. I kindly request that you consider granting me the
            requested leave, as it is crucial for me to [explain how the leave
            will benefit you, e.g., recharge and rejuvenate, attend to important
            family matters, undergo necessary medical treatment]. I have
            discussed my leave plans with my immediate supervisor [supervisor's
            name] and ensured that my colleagues are adequately informed and
            prepared for my absence. I will make sure to complete all pending
            tasks and delegate any urgent matters to my colleagues before my
            leave begins. I assure you that I will resume my duties promptly on
            [return date] and make every effort to seamlessly transition back
            into my responsibilities. If there are any specific tasks or
            projects that require immediate attention upon my return, please let
            me know in advance so that I can prepare accordingly. I have
            attached the necessary supporting documents to this email. Please
            let me know if there is any additional documentation or process I
            need to complete for the leave application.
          </p>

          <p className="pb-3">
            Thank you for your understanding and support in this matter. If you
            have any questions or need further information, please feel free to
            reach out to me. I look forward to your favorable response.
          </p>

          <p>Best regards,</p>

          <p>[Your Name] </p>
        </div>
      </div>
    </div>
  );
};


export default Email;