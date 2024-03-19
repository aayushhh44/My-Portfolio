import React from 'react';
import Navbar from '../components/Navbar';
import { FaFacebook, FaInstagram, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Get in Touch</h1>
        <div className="flex items-center gap-6">
          <Link
            to="https://www.facebook.com/yourfacebookusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
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
      </div>
    </div>
  );
};

export default Contacts;
