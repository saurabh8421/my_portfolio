import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { BsFacebook,BsGithub } from "react-icons/bs";
import { RiTwitterXFill} from "react-icons/ri";

import TextChange from "../TextChange";
import HomeBlob from '../HomeBlob/HomeBlob';

const Home = () => {
  return (
    <div className="text-slate-900 dark:text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
      <p className="text-sm md:text-2xl tracking-tight font-bold">
          Hello It's Me
        </p>
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
        Saurabh
        </h1>
        <p className="text-sm md:text-2xl tracking-tight font-bold">
          And I'm a <TextChange/>
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum provident rerum eos nemo odit dolores quis voluptatum voluptates quas.</p>
        <ul className='list-none space-x-10 my-8'>
            <li className='float-left text-2xl font-extrabold text-sky-400'>
              <a href="https://www.instagram.com/saurabh_saini_261/" target='_blank'>
              <IoLogoInstagram /></a>
              
            </li>
            <li className='float-left text-2xl font-extrabold text-sky-400'><BsFacebook />

            </li>
            <li className='float-left text-2xl font-extrabold text-sky-400'><BsGithub />

            </li>
            <li className='float-left text-2xl font-extrabold text-sky-400'><RiTwitterXFill />

            </li>
           
           
        </ul>
        <br />
        <button className="mt-5 inset-x-20 inset-y-28 shadow-2xl drop-shadow-2xl shadow-sky-400 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 rounded-xl bg-sky-400 font-bold">
          Download CV
        </button>
      </div>
      <div className='rounded-none'>
        <HomeBlob/>
      </div>
    </div>
  );
};

export default Home;
