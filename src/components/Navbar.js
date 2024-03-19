import React from 'react'
import { Link } from 'react-router-dom'
import { CiMail } from "react-icons/ci";


const Navbar = () => {
  return (
    <div>

        <nav className='flex justify-between items-center h-full gap-3 mt-4'>        
           <div className="flex items-center ml-2">
      <CiMail className="text-xs sm:text-xl" />
      <Link className="decoration-transparent text-xs sm:text-xl text-black" to='/'>aayushpoudel59@gmail.com</Link>
    </div>
            
          

          <div className='flex gap-2 sm:gap-8 mr-6 cursor-pointer'> 
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/'>Home</Link>
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/about-me'>About Me</Link>
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/projects'>Projects</Link>
          <Link className='text-red-700 hover:text-red-900 text-xs sm:text-xl decoration-transparent' to='/contact'>Contact</Link>
          </div>

        </nav>
    </div>
  )
}

export default Navbar
