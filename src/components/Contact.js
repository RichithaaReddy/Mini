// src/HelpPage.js

import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
   <div>
     <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <img className='w-[100] mr-10 rounded-full h-[100mm]' src="https://blog.happyfox.com/wp-content/uploads/2019/08/10-secrets.png"/>
      <div className="bg-white p-8 ml-12 rounded max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Need Help?</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions or need assistance, feel free to contact us using the
          following methods:
        </p>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Email:</p>
          <p className="text-violet-500 cursor-pointer font-semibold">support@placify.com</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Phone Number:</p>
          <p className="text-violet-500 cursor-pointer font-semibold">+1 (999) 999-9910</p>
        </div>
        <p className="text-gray-600">
          Our customer support team is available to assist you during business hours. We aim to
          respond to your inquiries as quickly as possible.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
