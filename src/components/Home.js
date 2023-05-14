import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineFileSearch } from 'react-icons/ai';

const Home = () => {
  return (
    <div className='min-h-screen'>
       <div className=" px-5">
      <div className="flex py-12 px-3 md:px-8">
        <div className="mx-3">
          <h1 className="text-3xl font-bold mb-6 text-left">With Placify, get ready for your dream job.</h1>
          <p className="text-xl text-gray-800 mb-8 text-left">Prepare for your Placements and land your ideal job with the help of Placify,a platform that promises to make it easy for students to practise examinations by giving test patterns for various organisations and mock tests so that students have access to test patterns and take tests online while also allowing colleges to clearly observe student performance.</p>
          <div className="flex items-center">
            <div className="flex mr-4">
              <div className="rounded-full bg-violet-700 p-4 mr-4"><HiOutlineUserGroup className="text-white text-2xl" /></div>
              <div className="text-2xl pt-2 font-bold"> Students</div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-violet-700 p-4 mr-4"><AiOutlineFileSearch className="text-white text-2xl" /></div>
              <div className="text-2xl font-bold"> Admins</div>
            </div>
          </div>
        </div>
        <div className=" mx-5 p-5">
          <img src="https://www.sankara.ac.in/science-and-commerce/wp-content/uploads/2021/04/Placement-Cell-Image-1.jpg" alt="placement" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
      <div className="px-14 ">
        <div className="text-3xl text-left font-bold mb-6">What Placify Offers ?</div>
        <div className="flex rounded-full items-center mb-8 p-4 mr-4 ">
          <div className=''><FaLaptopCode className="text-blue-500  text-4xl" /></div>
          <div>
            <div className="text-xl font-bold mb-2 px-3">Curated Study Materials</div>
          </div>
        </div>
        <div className="flex rounded-full items-center mb-8 p-4 mr-4">
          <div className=""><HiOutlineUserGroup className="text-blue-500 text-4xl" /></div>
          <div>
            <div className="text-xl font-bold mb-2 px-3">Practice Tests</div>
            </div>
    </div>
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          For your Placement Preparation
        </h1>
        <p className="mt-4 text-lg text-gray-600">
        To ace job tests, access carefully selected test patterns and take mock tests.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="mb-4 sm:mb-0 sm:mr-4  flex-shrink-0 bg-white p-6 rounded-lg shadow-lg">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Practice</h2>
          
        </div>
        <div className="flex-grow-0 flex-shrink-0 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Test</h2>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/register"
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
          >
          Register Now
        </Link>
      </div>
    </div>
 </div>
 </div>
  </div>
    )
}

export default Home