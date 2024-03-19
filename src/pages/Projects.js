import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import projects from '../pages/Projects.json'
import Google from '../assets/google.png'
import { CiSearch } from 'react-icons/ci'


const Projects = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProject(projects)
    }, 1000)
  }, []);

  const entries = project ? Object.entries(project) : [];

  return (
    <div>
      <Navbar />

      <div className="top-0 mt-16 text-center md:ml-[200px] lg:ml-[400px] xl:ml-[600px] left-0 max-w-md">
        <img className='md:w-[300px] w-[150px] cursor-pointer object-cover' src={Google} alt='Google'/>
        <div className="relative">
          <input
            className="mt-6 w-[350px] px-4 py-2 placeholder-black rounded-lg text-black h-5 border border-gray-400 focus:outline-none focus:border-blue-500 pl-10"
            type="text"
            placeholder="my projects"
          />
          <CiSearch className="absolute top-0 left-0 mt-9 cursor-pointer ml-6 md:ml-8 text-gray-400" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project ? (
            entries.map(([key, pro]) => (
              <div key={key} className="bg-white shadow-xl p-4 rounded-lg">
                <img className='object-cover w-full h-48' src={pro.imageURL} alt={pro.name} />
                <h2 className="text-lg font-semibold text-center my-2">{pro.name}</h2>
                <p className="text-gray-600">{pro.details}</p>
                <div className="mt-4">
                  <a href={pro.demoLink} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={pro.githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
