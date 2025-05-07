import React from "react";
import reactLogo from '../../logos/react.svg';
import tailwindLogo from '../../logos/tailwindcss.svg';
import expressLogo from '../../logos/express.svg';
import nodeLogo from '../../logos/node.svg';
import mongoLogo from '../../logos/mongo.svg';
import gitLogo from '../../logos/git.svg';
import jsLogo from '../../logos/js.svg';
import htmlLogo from '../../logos/html.svg';
import cssLogo from '../../logos/css.svg';
import postmanLogo from '../../logos/postman.svg';
import { IoArrowForward } from "react-icons/io5";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-20 dark:bg-gray-900">
      <h1 className="text-3xl md:text-5xl dark:text-white font-extrabold mb-10 text-center text-slate-950">
        My Skills
      </h1>

      {/* Tech Stack Section */}
      <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-8 mb-16 shadow-xl">
        <h2 className="text-2xl dark:text-white font-bold mb-8 text-center">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo, nodeLogo, mongoLogo, expressLogo, gitLogo, postmanLogo]
            .map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={logo.split('/').pop().split('.')[0] + " Logo"}
                className="w-20 h-20 hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-wrap items-center justify-around">

        {/* Frontend Development */}
        <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-6 m-4 w-full md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl md:text-2xl dark:text-white font-semibold mb-4">Frontend Development</h2>
          <p className="text-sm md:text-base dark:text-gray-300 mb-4 font-medium">
            Proficient in HTML, CSS, and JavaScript, with expertise in frameworks like React.js and Tailwind CSS. 
            Experience in creating responsive designs, implementing state management with Redux, and ensuring smooth routing using React Router.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">
                Built dynamic interfaces optimized for performance and accessibility.
              </span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">
                Integrated APIs and developed interactive components.
              </span>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-6 m-4 w-full md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl md:text-2xl dark:text-white font-semibold mb-4">Backend Development</h2>
          <p className="text-sm md:text-base dark:text-gray-300 mb-4 font-medium">
            Strong understanding of server-side technologies using Node.js and Express.js. Skilled in designing REST APIs, working with MongoDB databases, and leveraging Postman for API testing and development.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">
                Developed RESTful APIs and middleware for scalable applications.
              </span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">
                Integrated database operations using MongoDB and Mongoose.
              </span>
            </div>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="bg-sky-200 dark:bg-zinc-800 rounded-lg p-6 m-4 w-full md:w-1/3 shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl md:text-2xl dark:text-white font-semibold mb-4">UI/UX Design</h2>
          <p className="text-sm md:text-base dark:text-gray-300 mb-4 font-medium">
            Passionate about designing intuitive, user-friendly interfaces with a focus on usability and aesthetics. Skilled in Figma for creating high-fidelity designs and prototypes.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">
                Crafted wireframes, prototypes, and UI designs in Figma.
              </span>
            </div>
            <div className="flex items-center mb-2">
              <IoArrowForward size={20} className="text-blue-400" />
              <span className="text-gray-400 ml-2">
                Focused on responsive design to ensure seamless user experiences across devices.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
