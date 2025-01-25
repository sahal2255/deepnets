import React from 'react';
import { GiRotaryPhone } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md"; 

import FooterLogo from '../assets/MainLogo.png'
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 md:px-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      <div className="bg-gray-800 p-6 rounded-lg border-2 text-center border-white shadow-lg">
          <h3 className="text-xl font-semibold mb-4 ">Connect With Us</h3>
          
          <div className="flex items-center space-x-4 mb-2 justify-center">
            <GiRotaryPhone className="text-blue-500 text-xl" />
            <p className="text-gray-400">+91 9567843340</p>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <CiMail className="text-blue-500 text-xl" />
            <p className="text-gray-400">info@deepnetsoft.com</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border-2 flex justify-center items-center border-white shadow-lg">
          <img src={FooterLogo} alt="" className='h-16' />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border-2 border-white shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Find Us</h3>
          <div className="flex items-center justify-center space-x-4">
            <MdLocationOn className="text-gray-500 text-3xl" />
            <p className="text-gray-400 text-center">
              First floor, Geo Infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
