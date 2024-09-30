import React from 'react';
import Profilepic from '../../assets/photo.png'; // Ensure this path is correct

const HomeBlob = () => {
  return (
    <div className="relative w-64 h-64 overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <circle cx="100" cy="100" r="100" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M60.4,-70.4C76.3,-57.4,83.9,-29.6,83.5,-9.8C83.2,9.9,75.5,18.9,68.6,28.3C61.7,37.7,55.6,47.4,45.4,56.5C35.1,65.6,20.6,73.1,8.1,67.1C-4.3,61.1,-8.6,41.6,-24.8,35.8C-41,30,-70.1,38.1,-74.9,26.1C-79.7,14.1,-60.1,-7.3,-54.4,-22.6C-48.8,-37.8,-56.9,-46.8,-50.4,-54.1C-43.8,-61.5,-22.9,-66.1,0.1,-66.5C23.1,-66.9,46.2,-52.1,60.4,-70.4Z"
            className="fill-sky-400 transition-transform duration-300"
          />
          <image
            className="w-full h-full object-cover"
            x="0"
            y="0"
            width="200"
            height="200"
            href={Profilepic}
          />
        </g>
      </svg>
    </div>
  );
};

export default HomeBlob;
