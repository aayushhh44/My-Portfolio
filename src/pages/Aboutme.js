import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Google from "../assets/google.png";
import { CiSearch } from "react-icons/ci";
import Wiki from "../assets/wiki.png";
import { IoIosArrowDropdown } from "react-icons/io";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-8">
      <div
        className="rounded-md mr-12 cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <hr className="w-26 border-t dark:border-gray-100 border-gray-600  opacity-40 " />
        <div className="flex items-center justify-between mb-4 p-1 w-full ">
          <h3 className="md:text-lg font-poppins text-sm ">{question}</h3>
          <IoIosArrowDropdown size={25} className="text-gray-500 " />
        </div>
        {isOpen && (
          <p className="px-4 pb-3 text-xs md:text-lg w-full font-poppins -mt-2 mr-16 ">
            {answer}
          </p>
        )}
      </div>
      <hr className="w-full border-t dark:border-gray-100 border-gray-600 opacity-40 -mt-2 mr-[40px] md:-mt-3" />
    </div>
  );
};

const Aboutme = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-36 top-0 text-center md:ml-[200px] lg:ml-[400px] xl:ml-[600px] left-0 max-w-md">
        <div className="flex items-center justify-center">
          <img
            className="md:w-[300px] w-[150px] cursor-pointer object-cover"
            src={Google}
            alt="Google"
          />
        </div>
        <div className="relative">
          <input
            className="mt-6 w-[350px] p-4 placeholder-black place-content-between rounded-lg text-black h-5 border border-gray-400 focus:outline-none focus:border-blue-500 pl-10"
            type="text"
            placeholder="Who am I?"
          />
          <CiSearch className="absolute -top-1 left-10 mt-9 cursor-pointer ml-6 text-gray-400" />
        </div>

        <div className="mt-4 gap-2">
          <button className="p-2 bg-gray-100 dark:bg-gray-900 font-poppins">
            Web Analytics
          </button>
          <button className="p-2 ml-3 bg-gray-100 dark:bg-gray-900 font-poppins">
            Im feeling Lucky
          </button>
        </div>
      </div>

      <div className="p-0 sm:p-8">
        <div className="container ml-[20px] md:mx-auto mt-8 flex items-center gap-4 cursor-pointer">
          <div className="rounded-full bg-slate-100 w-8 h-8 border border-gray-500 flex items-center justify-center p-1">
            <img src={Wiki} className="w-6 h-6" alt="Wikipedia" />
          </div>

          <div className="">
            <p className="mb-2 text-sm font-bold">Wikipedia</p>
            <p className="md:text-sm text-xs -mt-2 cursor-pointer">
              https://en.wikipedia.org > wiki > Aayush_Poudel
            </p>
          </div>
        </div>

        <div className="px-16 sm:py-8 md:mt-6">
          <p className="text-blue-700 my-4 text-sm md:text-xl cursor-pointer mb-3 font-poppins">
            Aayush Poudel
          </p>
          <p className="-mt-3 text-xs md:text-lg">
           
            <span className="font-bold font-poppins text-gray-500">
              Aayush Poudel
            </span>
            is a web developer who loves building awesome stuff online. His tech
            stack includes React for dynamic user interfaces, Node.js for
            scalable server-side development, Tailwind CSS for styling, and
            MongoDB for efficient database management....{" "}
          </p>

          {/* People also asks */}
          <div>
            <p className="text-blue-600 mt-5 text-xl mb-2 font-poppins mr-9">
              People also ask :
            </p>

            <FAQItem
              question="Who is Aayush ?"
              answer="Aayush is a web developer who loves to do coding."
            />
            <FAQItem
              question="What programming languages does Aayush specialize in??"
              answer="Aayush specializes in JavaScript, using frameworks like React.js and Node.js for versatile web development."
            />
            <FAQItem
              question="How can I contact Aayush for collaboration or inquiries?"
              answer="You can contact Aayush for collaboration or inquiries through his email address or social media."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
