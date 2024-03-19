  import React, { useState } from 'react';
  import Navbar from '../components/Navbar';
  import Google from '../assets/google.png';
  import { CiSearch } from "react-icons/ci";
  import Wiki from '../assets/wiki.png';
  import { IoIosArrowDropdown } from "react-icons/io";



  const FAQItem = ({question, answer}) =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
      <div className="mb-4 ">
      <div className="rounded-md mr-12 cursor-pointer w-full" onClick={() => setIsOpen(!isOpen)}>
      <hr className='w-26 border-t border-gray-100 opacity-40 mr-[40px] md:mr-[400px] -mb-2 md:-mb-3'/>
        <div className="flex items-center w-full ">
          <h3 className="md:text-lg font-normal text-xs ">{question}</h3>
          <IoIosArrowDropdown className='text-gray-500 ml-2 w-4 h-4 mr-8 ' />
        </div>
        {isOpen && <p className="px-4 pb-3 text-xs md:text-lg w-full font-normal -mt-2 mr-16 -ml-4 text-gray-700">{answer}</p>}
      </div>
      <hr className='w-26 border-t border-gray-100 opacity-40 -mt-2 mr-[40px] md:-mt-3 md:mr-[400px]'/>
    </div>
    )
  }


  const Aboutme = () => {
    return (
      <div >
        <Navbar />
        <div className=" top-0 mt-16 text-center md:ml-[200px] lg:ml-[400px] xl:ml-[600px] left-0 max-w-md">
          <img className='md:w-[300px] w-[150px] cursor-pointer object-cover' src={Google} alt='Google' />
          <div className="relative">
            <input
              className="mt-6 w-[350px] px-4 py-2 placeholder-black place-content-between rounded-lg text-black h-5 border border-gray-400 focus:outline-none focus:border-blue-500 pl-10"
              type="text"
              placeholder="Who am I?"
            />
            <CiSearch className="absolute top-0 left-0 mt-9 cursor-pointer ml-6 text-gray-400" />
          </div>

          <div className='mt-4 gap-2'>
            <button className='p-2'>Web Analytics</button>
            <button className='p-2 ml-3'>Im feeling Lucky</button>
          </div>

        </div>

        <div className="container ml-[20px] md:mx-auto mt-8 flex items-center gap-4 cursor-pointer">
          <div className="rounded-full bg-slate-100 w-8 h-8 border border-gray-500 flex items-center justify-center p-1">
            <img src={Wiki} className="w-6 h-6" alt="Wikipedia" />
          </div>



          <div>
            <p className="mb-2 text-sm font-bold">Wikipedia</p>
            <p className="md:text-sm text-xs -mt-3 cursor-pointer">https://en.wikipedia.org > wiki > Aayush_Poudel </p>
          </div>
        </div>

        <div className='ml-[80px] md:ml-[80px] -mt-3 md:mt-6'>
          <p className='text-blue-700 text-sm md:text-xl cursor-pointer'>Aayush Poudel</p>
          <p className='-mt-3 text-xs md:text-lg mr-20'> <span className='font-bold text-gray-500'>Aayush Poudel</span> is a web developer who loves building awesome stuff online. His tech stack includes React for dynamic user interfaces, Node.js for scalable server-side development, Tailwind CSS for styling, and MongoDB for efficient database management.... </p>


  {/* People also asks */}
          <div>
          <p className='text-blue-600 mt-5 mr-9'>People also ask :</p>

          <FAQItem question="Who is Aayush ?" answer="Aayush is a web developer who loves to do coding"/>
          <FAQItem question="What programming languages does Aayush specialize in??" answer="Aayush specializes in JavaScript, using frameworks like React.js and Node.js for versatile web development."/>
          <FAQItem question="How can I contact Aayush for collaboration or inquiries?" answer="You can contact Aayush for collaboration or inquiries through his email address or social media."/>

        </div>

        </div> 


      

        




      </div>
    );
  }

  export default Aboutme;
