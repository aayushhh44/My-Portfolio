import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ToogleButton";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white p-2 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-400 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            className="no-underline flex items-center space-x-3 rtl:space-x-reverse"
            href="https://flowbite.com/"
          >
            <Link to='/' className="no-underline text-2xl">Aayush</Link>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ThemeToggle />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 list-none hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
          
            
                <Link to='/'

                  className="block no-underline py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              
           
                <Link to='/about-me'
        
                  className="block py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>

                <Link to='/projects'
           
                  className="block py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
    
         
                <Link
                to='/blogs'
                  
                  className="block py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </Link>
          
         
                <Link to='/contact'
                 
                  className="block py-2 px-3 no-underline  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
            
       
          </div>
        </div>
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
