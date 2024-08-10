import React from "react";
import Navbar from "../components/Navbar";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";


const Contacts = () => {
  return (
    <div>
      <Navbar />

      {/* <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Get in Touch</h1>
        <div className="flex items-center gap-6">

        <Link
            to="https://www.instagram.com/aayblush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600"
          >
            <FaFacebook className="text-3xl" />
          </Link>

          
          
          <Link
            to="https://www.instagram.com/aayblush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600"
          >
            <FaInstagram className="text-3xl" />
          </Link>
          <Link
            to="https://discord.com/aymongush"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600"
          >
            <FaDiscord className="text-3xl" />
          </Link>
          <Link
            to="https://github.com/aayushhh44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600"
          >
            <FaGithub  className="text-3xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/aayush-poudel-915007223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600"
          >
            <FaLinkedin  className="text-3xl" />
          </Link>
        </div>
        <p className="mt-8 text-gray-600 text-lg ml-16 md:ml-0 mr-6 md:mr-3">
          Feel free to reach out to me on any of these platforms. I'm always happy to connect and chat!
        </p>
      </div>  */}

      {/* <div className='h-96 relative mt-10'>
        <img src="https://medhavicollege.edu.np/uploads/0000/1/2024/07/12/contact-banner.jpg" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        </div>

        <div>
          <h2 className='font-google text-center'>Contact Me</h2>

          <div className='flex'>
            <div className='w-1/4 bg-red-300'>
              <div className='flex items-center cursor-pointer gap-4 justify-center'>
              <FaInstagram/>
              <p>Instagram</p>
              </div>

              <div className='flex items-center cursor-pointer gap-4 justify-center'>
              <FaGithub/>
              <p>Github</p>
              </div>

              <div className='flex items-center cursor-pointer gap-4 justify-center'>
              <FaLinkedin/>
              <p>Linkedin</p>
              </div>

              <div className='flex items-center cursor-pointer gap-4 justify-center'>
              <FaDiscord/>
              <p>Discord</p>
              </div>

            </div>

            <div className='w-3/4 bg-red-800 flex items-center flex-col'>
              <label>Name</label>
              <input type='text' placeholder='first/last' />

              <label>Email</label>
              <input type='email' placeholder='first/last' />
            </div>
          </div>
        </div>  */}

      <div className="mt-24 pt-8">
        <h1 className="text-center">Get in Touch</h1>
        <div className="p-16 flex-col justify-center items-center sm:flex-row flex gap-8">
          <div className="bg-gray-100 p-4 w-1/3">
            <h2 className=" dark:text-black">My Socials</h2>

            <div className="flex flex-col gap-4">
              <FaFacebook
                size={30}
                className="cursor-pointer  dark:text-black"
              />
              <FaGithub
                size={30}
                className="cursor-pointer  dark:text-black"
              />
              <FaInstagram
                size={30}
                className="cursor-pointer  dark:text-black"
              />
              <FaLinkedin
                size={30}
                className="cursor-pointer  dark:text-black"
              />
            </div>
          </div>

          <div className="w-2/3">
            <form className="flex flex-col gap-2">
              <input
                className="border-0 p-2 border-b-2 border-black focus:border-black outline-none"
                placeholder="Your Name"
              />

              <input
                className="border-0 p-2 border-b-2 border-black focus:border-black outline-none"
                placeholder="Email"
              />

              <textarea
                className="border-0 p-2 border-b-2 border-black focus:border-black outline-none"
                placeholder="messages"
              />

              <button className="p-2 mt-8">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
