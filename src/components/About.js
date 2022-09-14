import React from 'react';
import Profile from '../assets/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faMusic,
  faPlane,
  faFilm,
  faMugHot,
  faBasketball,
  faMoneyBill,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
export default function About() {
  const personal_details = [
    {
      id: 1,
      details: (
        <>
          <label className="text-teal-400">BIRTHDAY</label>
          <strong className="ml-4">August 8, 1992</strong>
        </>
      ),
    },
    {
      id: 2,
      details: (
        <>
          <label className="text-teal-400">PHONE</label>
          <strong className="ml-4">+63 9338110899</strong>
        </>
      ),
    },
    {
      id: 3,
      details: (
        <>
          <label className="text-teal-400">EMAIL</label>
          <strong className="ml-4">nojlamoliva08@gmail</strong>
        </>
      ),
    },
    {
      id: 4,
      details: (
        <>
          <label className="text-teal-400">WEBSITE</label>
          <strong className="ml-4">www.admworx.com</strong>
        </>
      ),
    },
    {
      id: 5,
      details: (
        <>
          <label className="text-teal-400">ADDRESS</label>
          <strong className="ml-4">Davao City, Philippines</strong>
        </>
      ),
    },
    {
      id: 6,
      details: (
        <>
          <label className="text-teal-400">JOB STATUS</label>
          <strong className="ml-4 bg-teal-500 rounded-sm px-2 py-[1px] ">
            Freelance
          </strong>
        </>
      ),
    },
  ];

  const my_interests = [
    {
      id: 1,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faGamepad} size="xl" />
          <label>Games</label>
        </>
      ),
    },
    {
      id: 2,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faMusic} size="xl" />
          <label>Music</label>
        </>
      ),
    },
    {
      id: 3,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faPlane} size="xl" />
          <label>Travel</label>
        </>
      ),
    },
    {
      id: 4,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faFilm} size="xl" />
          <label>Movies</label>
        </>
      ),
    },
    {
      id: 5,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faMugHot} size="xl" />
          <label>Coffee</label>
        </>
      ),
    },
    {
      id: 6,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faBasketball} size="xl" />
          <label>Sports</label>
        </>
      ),
    },
    {
      id: 7,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faMoneyBill} size="xl" />
          <label>Money</label>
        </>
      ),
    },
    {
      id: 8,
      details: (
        <>
          <FontAwesomeIcon className="mb-2" icon={faCarSide} size="xl" />
          <label>Cars</label>
        </>
      ),
    },
  ];
  return (
    <div name="about" className=" w-full h-max bg-[#0a192f] text-white py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between h-full px-4 md:px-0 md:flex-row xl:w-4/5 mt-10">
        <div className="flex md:hidden mx-auto justify-center pb-10 ">
          <h1 className="flex text-4xl font-JosefinSans font-bold text-gray-300 border-gray-700 border-b-2">
            About Me{' '}
          </h1>
        </div>
        <div className="text-white flex basis-1/4 md:basis-2/4 md:px-0 px-20">
          <div className="">
            <img
              src={Profile}
              alt=""
              className="object-cover pointer-events-none"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative flex flex-col h-full text-white font-Lato px-10 md:pr-10 md:px-0 md:mt-0 mt-5 basis-3/4">
          <div className="hidden md:flex pb-10 ">
            <h2 className="flex text-5xl font-JosefinSans font-bold text-gray-400">
              About Me{' '}
            </h2>
          </div>
          <div className="flex pb-2">
            <h1 className="flex flex-col md:flex-wrap mx-auto md:mx-0 mb-10 md:mb-0 justify-center text-white text-xl font-bold ">
              <div className="flex mx-auto md:mx-0 text-2xl font-extrabold">
                I'm{' '}
                <label className="ml-2 text-teal-500 mr-1">
                  Aljon D. Moliva.
                </label>
              </div>
            </h1>
          </div>
          <div className="w-full font-Lato font-light text-justify pb-10 mb-10 space-y-4">
            <p>
              I'm 30 years of old residing from Davao City, Philippines. I have
              a degree of Bachelor of Science in Information Technology. Major
              in Software Engineering.
            </p>
            <p>
              I have 8 years of experience building and designing software using
              Microsoft product [ ASP.net, C#.net and MSSQL Database ].
              Currently, I love to work on web application using technologies
              like ReactJS, TailwindCSS, NodeJS.
            </p>
            <p>
              When I'm not working, my hobbies are playing basketball, online
              games like mobile legends and watching movies. This is to relieve
              stress from work.
            </p>
            <div className="flex md:flex-row flex-col md:space-x-4 text-lg font-medium text-teal-500  ">
              <Link to={'contacts'} smooth duration={800}>
                {' '}
                <button className="cursor-pointer border-2 border-teal-500 hover:bg-teal-500 hover:bg-opacity-20 rounded-md md:w-max w-full px-6 py-2 md:mt-10 mt-5 ">
                  Hire Me
                </button>
              </Link>

              <button className="cursor-pointer border-2 border-teal-500 hover:bg-teal-500 hover:bg-opacity-20 rounded-md md:w-max w-full px-6 py-2 md:mt-10 mt-5">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between h-full px-4 md:px-10 sm:px-15 py-0 md:py-10 md:flex-row xl:w-4/5">
        <div className="flex flex-col font-JosefinSans w-full px-10 md:px-0 md:pr-10 mb-5 basis-2/4">
          <h1 className="font-extrabold mb-2">PERSONAL DETAILS</h1>
          {personal_details.map(({ id, details }) => (
            <div
              key={id}
              className="flex items-center mt-2 justify-between text-sm"
            >
              {details}
            </div>
          ))}
        </div>
        <div className="flex flex-col font-JosefinSans w-full px-10 md:px-0 pb-4 mb-5 basis-3/4 mt-10 md:mt-0">
          <h1 className="font-extrabold mb-2">MY INTERESTS</h1>
          <div className="flex flex-wrap w-full justify-start">
            {my_interests.map(({ id, details }) => (
              <div
                id={id}
                className="flex flex-col items-center border border-gray-600 rounded-md w-20 p-4 mt-2 text-sm mx-1 hover:scale-105 duration-200"
              >
                {details}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
