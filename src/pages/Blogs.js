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

      <p>The first community is a very helpful to me and It also scared the shit outof me. I was so scared that I couldn't even move and say anything that's why I didnt tell a word. so it is very not important for me and evrything to me</p>
    </div>
    </>
  )
}

export default Blogs
