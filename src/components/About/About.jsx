import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png"; // Path to your image
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="dark:text-white flex flex-col md:flex-row items-center justify-center bg-sky-200 dark:bg-gray-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-8"
    >
      {/* Left Section - Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img
          className="h-60 md:h-80 rounded-xl object-cover shadow-xl transition-transform transform hover:scale-105 duration-300"
          src={AboutImg}
          alt="Frontend Developer"
        />
      </div>

      {/* Right Section - Text and Description */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-left text-gray-800 dark:text-white">
          About Me
        </h2>

        {/* Frontend Developer Description */}
        <div className="flex items-start space-x-4 mb-6">
          <IoArrowForward size={30} className="flex-shrink-0 text-blue-500 transition-transform transform hover:translate-x-2 duration-300" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 leading-relaxed font-medium">
              I specialize in building interactive user interfaces with HTML, CSS, JavaScript, and React. I focus on creating seamless, responsive experiences.
            </p>
          </div>
        </div>

        {/* Full Stack Developer Description */}
        <div className="flex items-start space-x-4 mb-6">
          <IoArrowForward size={30} className="flex-shrink-0 text-green-500 transition-transform transform hover:translate-x-2 duration-300" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 leading-relaxed font-medium">
              I build complete web applications with Node.js, Express, and MongoDB, integrating both frontend and backend for a seamless user experience.
            </p>
          </div>
        </div>

        {/* General Information */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
          I'm passionate about clean code, performance, and continually learning new technologies to stay at the forefront of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
