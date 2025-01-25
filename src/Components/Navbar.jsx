import React, { useState } from 'react';
import MainLogo from '../assets/MainLogo.png';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [viewToggle, setViewToggle] = useState(false);

  return (
    <div className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={MainLogo} alt="Logo" className="h-12 w-auto" />
        </div>

        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/" className="hover:text-blue-500 transition">
            Menu
          </Link>
          <Link to="/" className="hover:text-blue-500 transition">
            Make a Reservation
          </Link>
          <Link to="/" className="hover:text-blue-500 transition">
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          {viewToggle ? (
            <IoMdClose
              className="text-3xl cursor-pointer"
              onClick={() => setViewToggle(false)}
            />
          ) : (
            <IoMdMenu
              className="text-3xl cursor-pointer"
              onClick={() => setViewToggle(true)}
            />
          )}
        </div>
      </div>

      {viewToggle && (
        <div className="md:hidden bg-slate-700">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition"
                onClick={() => setViewToggle(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition"
                onClick={() => setViewToggle(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition"
                onClick={() => setViewToggle(false)}
              >
                Make a Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition"
                onClick={() => setViewToggle(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
