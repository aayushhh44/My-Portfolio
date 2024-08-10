import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ToogleButton";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div>

             
      <nav className="bg-white p-2 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-400 dark:border-gray-600">

      <RxHamburgerMenu
              onClick={() => setNav(!nav)}
              size={30}
              className="cursor-pointer absolute right-2 top-7 sm:hidden "
            />

            {
              nav ? <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link
                className="no-underline flex items-center space-x-3 rtl:space-x-reverse"
                href="https://flowbite.com/"
              >
                <Link to="/" className="no-underline font-poppins text-2xl">
                  Aayush
                </Link>
              </Link>
              <div className="flex items-center mr-8 md:order-2 gap-4 space-x-4 md:space-x-0 rtl:space-x-reverse">
                <ThemeToggle />
                
                {console.log(nav)}
              </div>
              <div
                className="items-center justify-between p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 list-none hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <Link
                  to="/"
                  className="block font-poppins no-underline py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 md:dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
    
                <Link
                  to="/about-me"
                  className="block font-poppins py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
    
                <Link
                  to="/projects"
                  className="block font-poppins py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
    
                <Link
                  to="/blogs"
                  className="block py-2 font-poppins px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </Link>
    
                <Link
                  to="/contact"
                  className="block py-2 font-poppins px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div> : <div className="h-screen">
            <div className="flex flex-col justify-center h-screen items-center gap-4"
                
        
              >
                <Link
                  to="/"
                  className="block font-poppins no-underline py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
    
                <Link
                  to="/about-me"
                  className="block font-poppins py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
    
                <Link
                  to="/projects"
                  className="block font-poppins py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
    
                <Link
                  to="/blogs"
                  className="block py-2 font-poppins px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </Link>
    
                <Link
                  to="/contact"
                  className="block py-2 font-poppins px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div>
            }
        
      </nav>

      {/* <nav className='flex justify-between items-center h-full gap-3 mt-4'>        
           <div className="flex items-center ml-2">
      <CiMail className="text-xs sm:text-xl" />
      <Link className="decoration-transparent text-xs sm:text-xl text-black" to='/'>aayushpoudel59@gmail.com</Link>
    </div>
            
          <div className='flex gap-1 sm:gap-8 mr-4 cursor-pointer'> 
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/'>Home</Link>
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/about-me'>About Me</Link>
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/projects'>Projects</Link>
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/contact'>Contact</Link>
          </div>

        </nav> */}


      


        
    </div>
  );
};

export default Navbar;
