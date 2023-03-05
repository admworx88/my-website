import React from 'react';
import HeroBanner from '../../assets/herobanner.jpg';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      <img
        src={HeroBanner}
        className="absolute inset-0 h-full w-full object-cover"
        alt="This is Hero Banner"
      />
      <div className="inset-0 absolute bg-gradient-to-b from-black to-gray-900 opacity-75 h-screen w-full"></div>
      <div className="relative mx-auto flex flex-col items-center justify-between h-full md:px-4 md:flex-row lg:px-20">
        <div className="relative flex flex-col justify-center  mx-auto text-center h-full text-white font-JosefinSans px-5">
          <div className="flex flex-wrap text-4xl mx-auto py-5">
            <div>
              Hello, I'm
              <strong className="font-black font-JosefinSans ">
                {' '}
                ALJON D. MOLIVA
              </strong>
            </div>
          </div>
          <div className="flex mx-auto lg:flex-row flex-col text-6xl text-white">
            <label>I'm a</label>
            <strong className="text-teal-400 ml-4">
              <Typewriter
                options={{
                  strings: [
                    'Front-End Developer',
                    'Back-End Developer',
                    'Full Stack Web Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </strong>
          </div>
          <div className="flex space-x-2 mx-auto">
            <div class="rounded-md font-Lato px-6 py-4 m-2 overflow-hidden relative group cursor-pointer border-2 border-teal-500 text-teal-500">
              <a href="cv.pdf" target="_blank" download={true} rel="noreferrer">
                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-teal-500 bg-opacity-20 top-1/2 group-hover:h-64 group-hover:-translate-y-20 ease"></span>
                <span class="relative text-teal-500 transition duration-300 group-hover:text-teal-500 ease drop-shadow-sm">
                  {' '}
                  DOWNLOAD CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
