import React from "react";
import { IoMdArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="dark:bg-gray-700 bg-[#922232] pt-8">
        <div className="p-8">
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-0">
            <div className="flex flex-col w-full sm:w-1/3">
              <p className="font-poppins text-[#D0C2B3] mb-2">Menu</p>
              <Link to='/' className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Home
              </Link>
              <Link to='/about-me' className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                About
              </Link>
              <Link to='/blogs' className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Blogs
              </Link>
              <Link to='/projects' className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Projects
              </Link>
              <Link to='/contact' className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-1/3">
              <div>
                <p className="font-poppins text-[#D0C2B3] mb-2">
                  Get in touch
                </p>
                <p className="font-poppins text-white">+977 9843249388</p>
                <p className="font-poppins text-white">aayushpoudel59@gmail.com</p>
              </div>

              <div className="my-2">
                <p className="font-poppins text-[#D0C2B3]">Address</p>
                <p className="font-p text-white">
                  Milan Chowk Kathmandu, Nepal
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-1/3">
              <p className="font-poppins mb-2 text-[#D0C2B3]">
                About Aayush Poudel.
              </p>
              <p className="font-poppins text-white">
                Aayush Poudel is a frontend developer | backend developer | learner
                
              </p>

              <div className="flex mt-4 gap-4 sm:gap-8 flex-col sm:flex-row">
                <p className="font-poppins px-4 py-1 cursor-pointer w-36 sm:w-44  border-[#D0C1B3] rounded-2xl text-[#D0C2B3] border">
                  Instagram
                </p>

                <p className="font-poppins px-4 py-1 cursor-pointer w-36 sm:w-44 border-[#D0C1B3] rounded-2xl text-[#D0C2B3] border">
                  <Link target="_blank" href="/">Linkedin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full overflow-hidden">
          <h1 className="xl:text-[320px] lg:text-[260px] md:text-[190px] font-extrabold font-poppins text-center text-[#D0C2B3] text-7xl text-nowrap">
            AAYUSH 
          </h1>
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-4 p-8 items-center">
          <p className="text-[#D0C2B3] text-nowrap font-poppins">Aayush poudel ©</p>
          <p className="text-[#D0C2B3] text-nowrap font-poppins">
            Designed by:
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aayush-poudel-915007223/"
            >
              Aayush Poudel
            </Link>
          </p>

          <div
            onClick={ScrollUp}
            className="flex items-center cursor-pointer transform translate duration-150 hover:scale-125"
          >
            <button className="text-[#D0C2B3] font-poppins">
              Back to Top
            </button>
            <IoMdArrowUp className="text-[#D0C2B3] font-poppins" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
