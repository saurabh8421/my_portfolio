import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import ThemeButton from "../ThemeButton";
const Header = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-gray-800 font-semibold dark:text-white px-10 py-4 md:px-20 border-b border-slate-500/10">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2  font-semibold  bg-black px-4 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-sky-400">
            Home
          </li>
        </a>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-sky-400">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-sky-400">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-sky-400">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-sky-400">
            Contact Us
          </li>
        </a>
        <li>
          <ThemeButton/>
        </li>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Header;
