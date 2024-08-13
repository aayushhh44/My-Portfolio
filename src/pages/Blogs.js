import React from 'react';
import Navbar from '../components/Navbar';
import { IoMdCalendar } from "react-icons/io";
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (

    <>
    <Navbar />
    {/* <div className='flex items-center justify-center h-screen'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl dark:text-white'>Is Working on this page. </h1>
    </div> */}


    <div className='mt-24 p-8 sm:p-44'>
      <h2 className='text-3xl my-2  font-poppins'>My Recent Posts</h2>


     <Link to='/blog-page'> <h1 className='text-xl cursor-pointer hover:underline'>My experience as a react developer</h1></Link>

      <div className='flex  items-center my-2'>
        <IoMdCalendar />
        <p className='font-poppins'>Mar 27th, 2024 | 12:04 AM</p>

      </div>

      <p>Over the past few years, my journey as a React developer has been nothing short of transformative. Starting with basic concepts, I've grown to appreciate the power and flexibility of React, allowing me to create dynamic, responsive, and user-friendly web applications.</p>
    </div>
    </>
  )
}

export default Blogs
