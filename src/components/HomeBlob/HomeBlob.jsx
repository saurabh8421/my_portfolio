import React from 'react';
import Profilepic from '../../assets/photo.png'; // Ensure this path is correct

const HomeBlob = () => {
  return (
    <div className="home__img" style={{ position: 'relative', width: '300px', height: '300px' }}>
      <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: '100%', height: '100%' }}>
        {/* Define the mask */}
        <mask id="mask0" mask-type="alpha">
          <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>
        </mask>

        {/* Apply the mask */}
        <g mask="url(#mask0)">
          {/* Blob shape with the color sky-400 */}
          <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            className="fill-sky-400"
            style={{ fill: '#38bdf8' }} // This is Tailwind's `sky-400` color in hex
          />
          {/* Insert the image inside the blob */}
          <image className="home__blob-img" x="15" y="0" xlinkHref={Profilepic} width="85%"></image>
        </g>
      </svg>
    </div>
  );
};

export default HomeBlob;
