import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import ThemeButton from "../ThemeButton";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-gray-800 font-semibold dark:text-white px-6 py-4 md:px-20 border-b border-slate-500/10">
      {/* Brand */}
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Menu Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex md:items-center w-full md:w-auto bg-black md:bg-transparent px-6 py-4 md:p-0 rounded-md relative mb-10 md:mb-0 md:static top-16 left-0 md:top-auto md:left-auto text-center bg-opacity-30 md:bg-opacity-0 transition-all duration-300`}
      >
        <a href="#Home" className="block md:inline-block">
          <li className="text-md transition-all duration-300 py-2 md:py-0 px-2 hover:text-sky-400">
            Home
          </li>
        </a>
        <a href="#About" className="block md:inline-block">
          <li className="text-md transition-all duration-300 py-2 md:py-0 px-2 hover:text-sky-400">
            About
          </li>
        </a>
        <a href="#Skills" className="block md:inline-block">
          <li className="text-md transition-all duration-300 py-2 md:py-0 px-2 hover:text-sky-400">
            Skills
          </li>
        </a>
        <a href="#Projects" className="block md:inline-block">
          <li className="text-md transition-all duration-300 py-2 md:py-0 px-2 hover:text-sky-400">
            Projects
          </li>
        </a>
        <a href="#Footer" className="block md:inline-block">
          <li className="text-md transition-all duration-300 py-2 md:py-0 px-2 hover:text-sky-400">
            Contact Us
          </li>
        </a>
        <li className=" md:inline-block relative py-2 md:py-0 px-2 align-middle md:w-auto w-full flex justify-center">
          <ThemeButton />
        </li>
      </ul>

      {/* Toggle Button */}
      <div className="md:hidden">
        
        {menu ? (
          <RiCloseLine
            size={30}
            className="absolute right-6 top-4 transition-all duration-300"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-6 top-4 transition-all duration-300"
            onClick={() => setMenu(true)}
          />
        )}
        
      </div>
    </nav>
  );
};

export default Header;
