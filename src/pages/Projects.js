import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import projects from "../pages/Projects.json";
import Google from "../assets/google.png";
import { CiSearch } from "react-icons/ci";
import SkeletonLoader from "../components/SkeletonLoader";
import { FaGithub } from "react-icons/fa6";



const Projects = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProject(projects);
    }, 1000);
  }, []);

  const entries = project ? Object.entries(project) : [];

  return (
    <div>
      <Navbar />

      <div className="top-0 pt-36 text-center md:ml-[200px] lg:ml-[400px] xl:ml-[600px] left-0 max-w-md">

        <div className="flex justify-center">
        <img
          className="md:w-[300px] w-[150px] cursor-pointer object-cover"
          src={Google}
          alt="Google"
        />

        </div>
       
        <div className="relative">
          <input
            className="mt-6 sm:w-[350px] font-poppins placeholder:font-poppins p-4 placeholder-black rounded-lg text-black h-5 border border-gray-400 focus:outline-none focus:border-blue-500 pl-10"
            type="text"
            placeholder="my projects"
          />
          <CiSearch className="absolute -top-1 left-14 mt-9 cursor-pointer ml-6 md:ml-8 text-gray-400" />
        </div>
      </div>

      <div className="max-w-4xl pb-16 mx-auto mt-12">
        <div className="grid grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project ? (
            entries.map(([key, pro]) => (
              <div key={key} className="bg-white p-8 shadow-xl rounded-lg">
                <img
                  className="object-contain w-full h-48"
                  src={pro.imageURL}
                  alt={pro.name}
                />
                <h2 className="text-lg font-semibold text-center my-2">
                  {pro.name}
                </h2>
                <p className="text-gray-600">{pro.details}</p>
                <div className=" items-center justify-end flex">
                  <a
                    href={pro.demoLink}
                    className="text-blue-500 no-underline hover:scale-90 hover:underline mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={pro.githubLink}
                    className="text-blue-500 mt-1 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <SkeletonLoader count={6} /> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
