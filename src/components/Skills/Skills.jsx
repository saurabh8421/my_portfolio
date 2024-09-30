import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-20  dark:bg-gray-900">
      <h1 className="text-2xl md:text-4xl dark:text-white font-bold mb-8 text-slate-950">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Frontend Development Skills Card */}
        <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-6 m-4 w-full md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl dark:text-white font-semibold mb-4">Frontend Development</h2>
          <p className="text-sm dark:text-gray-300 mb-4 font-semibold">
            Proficient in building responsive and interactive web applications using modern frameworks like React.js.
          </p>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Developed user interfaces focusing on performance and accessibility.</span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Collaborated with UX/UI designers to create seamless user experiences.</span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Implemented state management using Redux and Context API.</span>
            </div>
          </div>
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded transition-colors shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            Learn More
          </button>
        </div>

        {/* Web Design Skills Card */}
        <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-6 m-4 w-full md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl dark:text-white font-semibold mb-4">Web Design</h2>
          <p className="text-sm dark:text-gray-300 mb-4 font-semibold">
            Skilled in creating visually appealing and user-friendly website designs tailored to client needs.
          </p>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Utilized tools like Figma and Adobe XD for design prototypes.</span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Conducted user research to inform design decisions and improve usability.</span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Developed design systems and style guides to maintain consistency.</span>
            </div>
          </div>
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded transition-colors shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            Learn More
          </button>
        </div>

        {/* Data Analysis Skills Card */}
        <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-6 m-4 w-full md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl dark:text-white font-semibold mb-4">Data Analysis</h2>
          <p className="text-sm dark:text-gray-300 mb-4 font-semibold">
            Experienced in analyzing complex data sets to drive business decisions and enhance operational efficiency.
          </p>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Utilized SQL and Python for data extraction and analysis.</span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Created visualizations and dashboards to present insights to stakeholders.</span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">Collaborated with cross-functional teams to identify data needs and provide actionable recommendations.</span>
            </div>
          </div>
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded transition-colors shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
