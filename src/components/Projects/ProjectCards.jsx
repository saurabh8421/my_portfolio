import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-sky-200 dark:bg-zinc-950 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <img className="p-4 rounded-lg" src={bannerImg} alt={title} />
      <h3 className="px-4 text-xl md:text-2xl font-bold text-zinc-900 dark:text-white leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md text-gray-600 dark:text-gray-300 leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 bg-sky-400 hover:bg-sky-500 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
          Demo
        </button>
        <button className="text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 bg-sky-400 hover:bg-sky-500 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
