import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" p-5 bg-white shadow-lg shadow-gray-100 ">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <div className="md:flex">
        <h3>Quiz</h3>
        <ul
          className={`bg-white w-full md:flex absolute left-0 md:static duration-500 ease-in-out ${
            open ? "top-15" : "top-[-120px]"
          }`}
        >
          <li className="mr-3">
            <Link to="/">home</Link>
          </li>
          <li className="mr-3">
            <Link to="/statistics">Statistics</Link>
          </li>
          <li className="mr-3">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className='shadow-md w-full fixed top-0 left-0'>
//             <div className='md:flex items-center justify-between bg-cyan-400 py-4 md:px-10 px-7'>
//                 <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
//                     Quiz Busters
//                 </div>
//                 <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
//                     <Bars3Icon></Bars3Icon>
//                 </div>
//                 <ul className='md:flex md:items-center absolute md:static md:pb-0 pb-12 bg-cyan-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in'>
//                     <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-400 duration-500' to='/'>Home</Link></li>
//                     <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-400 duration-500' to='/statistics'>Statistics</Link></li>
//                     <li className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-400 duration-500' to='/blogs'>Blog</Link></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
