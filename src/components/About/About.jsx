import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png"; // Path to your image
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="dark:text-white flex flex-col md:flex-row items-center justify-center bg-sky-200 dark:bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-8"
    >
      {/* Left Section - Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img
          className="h-60 md:h-80 rounded-md object-cover shadow-lg"
          src={AboutImg}
          alt="Frontend Developer"
        />
      </div>

      {/* Right Section - Text and Description */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">About Me</h2>
        
        <div className="flex items-start space-x-3 mb-4">
          <IoArrowForward size={30} className="flex-shrink-0 mt-1 text-blue-400" />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Frontend Developer</h3>
            <p className="text-sm md:text-md leading-relaxed font-semibold text-gray-600 dark:text-gray-300 mt-1">
              I specialize in creating interactive and responsive user interfaces
              using modern web technologies. My expertise includes HTML5, CSS3, and 
              JavaScript, with a strong focus on React.js for building dynamic web applications.
            </p>
          </div>
        </div>
        
        <p className="text-sm md:text-md leading-relaxed font-semibold text-gray-600 dark:text-gray-300">
          I am passionate about delivering seamless user experiences, writing clean code, 
          and continuously learning the latest trends in frontend development. 
          In my spare time, I love exploring new tools and frameworks that enhance 
          productivity and improve web performance.
        </p>
      </div>
    </div>
  );
};

export default About;
