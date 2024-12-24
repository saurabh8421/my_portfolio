import React from 'react';
import { BsFacebook, BsGithub,BsLinkedin  } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import resume from "../../assets/resume.pdf"
import TextChange from "../TextChange";
import HomeBlob from '../HomeBlob/HomeBlob';

const Home = () => {
  return (
    <div className="text-slate-900 dark:text-white flex flex-col md:flex-row w-full justify-between items-start p-5 md:p-20 md:py-10">
      {/* Text Section */}
      <div className="w-full md:w-2/4 md:pt-10">
        <p className="text-sm md:text-2xl tracking-tight font-bold">
          Hello, It's Me
        </p>
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          Saurabh
        </h1>
        <p className="text-sm md:text-2xl tracking-tight font-bold">
          And I'm a <TextChange />
        </p>
        <p className="text-xs md:text-base mt-3">
          I am a recent graduate from Computer Science Engineering with a passion for technology and software development. I am eager to contribute to the tech industry with my knowledge in web development, algorithms, and problem-solving.
        </p>
        

        {/* Social Links */}
        <ul className="list-none flex space-x-4 my-8">
          <li className="text-xl md:text-2xl font-extrabold text-sky-400">
            <a href="https://www.linkedin.com/in/saurabh-kumar-5193b9229/" target='_blank'>
            <BsLinkedin />
            </a>
          </li>
          <li className="text-xl md:text-2xl font-extrabold text-sky-400">
            <BsFacebook />
          </li>
          <li className="text-xl md:text-2xl font-extrabold text-sky-400">
          <a href="https://github.com/saurabh8421" target="_blank" rel="noopener noreferrer">
          <BsGithub />
            </a>
          </li>
          <li className="text-xl md:text-2xl font-extrabold text-sky-400">
            <RiTwitterXFill />
          </li>
        </ul>

        {/* Download CV Button */}
        <button className="mt-5 shadow-xl text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 transition-transform duration-300 hover:scale-105 rounded-xl bg-sky-400 font-bold">
          <a href={resume} download>
          Download CV
          </a>
        </button>
      </div>

      {/* Blob Section */}
      <div className="w-full mt-10 md:mt-0 md:w-1/2 flex justify-center py-20">
        <HomeBlob />
      </div>
    </div>
  );
};

export default Home;
