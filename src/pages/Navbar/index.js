import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/';
import { Link } from 'react-scroll';
import Logo from '../../assets/admworx.png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const nav_links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'contacts',
    },
  ];

  const changeColor = () => {
    if (window.scrollY <= 90) setNavColor(true);
    else setNavColor(false);
  };

  window.addEventListener('scroll', changeColor);

  return (
    <nav
      className={
        !navColor
          ? 'flex w-full items-center h-20 text-white py-5 px-5 font-kufam fixed z-50 bg-[#0a192f] drop-shadow-lg '
          : 'flex w-full items-center h-20 text-white py-5 px-5 font-kufam fixed z-50 bg-black bg-opacity-25'
      }
    >
      <div className="flex justify-between w-full md:w-4/5 items-center mx-auto">
        <div>
          <Link to={'home'} smooth duration={800}>
            <h1 className="font-Righteous text-2xl cursor-pointer">admworx</h1>
          </Link>

          {/* <h1 className="flex text-xl ml-5 mx-auto items-center cursor-pointer font-KaushanScript">
            ADMWORX
          </h1> */}
        </div>
        <ul className="hidden md:flex">
          {nav_links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-200  hover:text-teal-400 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={800}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="flex md:hidden items-center cursor-pointer pr-4 z-10 text-gray-500"
        >
          {nav ? (
            <XMarkIcon className="h-8 w-8 hover:scale-125 duration-200" />
          ) : (
            <Bars3Icon className="h-8 w-8 hover:scale-125 duration-200" />
          )}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
            {nav_links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-6 text-4xl cursor-pointer capitalize hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={800}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
