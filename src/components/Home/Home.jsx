import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import resume from "../../assets/resume.pdf";
import TextChange from "../TextChange";
import HomeBlob from '../HomeBlob/HomeBlob';

const Home = () => {
  return (
    <div className="text-slate-900 dark:text-white flex flex-col md:flex-row w-full justify-between items-start px-6 md:px-20 py-16 md:py-28 font-inter">
      
      {/* Text Section */}
      <div className="w-full md:w-2/4">
        <p className="text-lg md:text-2xl tracking-wide font-semibold">
          👋 Hello, It's Me
        </p>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 drop-shadow-lg">
          Saurabh
        </h1>
        <p className="text-lg md:text-2xl font-medium mt-3">
          And I'm a <span className="text-sky-400 font-semibold"><TextChange /></span>
        </p>
        
        <p className="text-sm md:text-lg leading-relaxed mt-6">
          I am a recent Computer Science graduate with a passion for technology and software development. I specialize in full-stack web development, particularly using the <span className="font-semibold text-sky-400">MERN stack</span> (MongoDB, Express, React, Node.js) to build dynamic, responsive, and scalable applications. I am eager to contribute to innovative projects and bring ideas to life with clean, efficient code.
        </p>

        {/* Social Links */}
        <ul className="flex space-x-5 my-10">
          <li>
            <a href="https://www.linkedin.com/in/saurabh-kumar-5193b9229/" 
               target='_blank' 
               rel="noopener noreferrer" 
               aria-label="LinkedIn Profile"
               className="text-3xl hover:text-sky-400 transition-transform transform hover:scale-110">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-sky-400 transition-transform transform hover:scale-110">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/saurabh8421" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-sky-400 transition-transform transform hover:scale-110">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-3xl hover:text-sky-400 transition-transform transform hover:scale-110">
              <RiTwitterXFill />
            </a>
          </li>
        </ul>

        {/* Download CV Button */}
        <button className="mt-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 px-8 text-lg font-semibold hover:opacity-90 hover:scale-105 transform transition-all duration-300 shadow-lg rounded-full">
          <a href={resume} download>
            📄 Download CV
          </a>
        </button>
      </div>

      {/* Blob Section */}
      <div className="w-full mt-16 md:mt-0 md:w-1/2 flex justify-center items-center">
        <HomeBlob />
      </div>
    </div>
  );
};

export default Home;
