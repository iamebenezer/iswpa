// src/components/Navbar.js

import React, { useState } from 'react';
import logo from './assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#131313] fixed w-screen navbar">
      <div className="max-w-7xl pt-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex justify-center items-center font-head gap-1 text-white">
                    <img src={logo} className='w-12' alt="" />  ISWP
            </div>
            <div className="hidden md:block">
              <div className="ml-10 font-head flex items-baseline space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#about" className="text-white">About</a>
                <a href="#goal" className="text-white">About</a>
                <a href="#road" className="text-white">Roadmap</a>
                {/* <a href="#team" className='text-white'>Team</a>
               */}
                <a href="#token" className="text-white">Tokenomics</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block ' : 'hidden'} md:hidden `}>
        <div className="px-2 pt-2 pb-3 text-center font-head space-y-1 sm:px-3">
          <a href="#" className="text-white block">Home</a>
          <a href="#about" className="text-white block">About</a>
          <a href="#goal" className="text-white">Goals</a>
          <a href="#road" className="text-white block">Roadmap</a>
          {/* <a href="#team" className="text-white block">Team</a>
        */}
          <a href="#token" className="text-white block">Tokenomics</a>
          {/* <div className='mt-8'>
          <a href="" className='
                  bg-[#fff] transition duration-150 ease-in-out
                 border-white border-2 px-8 py-2 rounded-lg text-lg md:text-2xl 
                 font-head text-[#202b8f] shadow-blue-50 shadow-sm'>Join</a>
                 </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
