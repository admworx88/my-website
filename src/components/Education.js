import React from 'react';

export default function Education() {
  return (
    <div
      name="education"
      className="w-full h-max bg-[#0a192f] text-white md:hr-screen py-24"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col">
        <h2 className="md:mx-0 mx-auto text-5xl font-bold font-JosefinSans text-gray-400">
          EDUCATION
        </h2>
        <div className="flex flex-col md:flex-row mx-auto space-y-10 md:space-y-0 md:space-x-10 py-10">
          <div className="bg-[#112240] rounded-md p-10 hover:scale-105 duration-100">
            <h2 className="text-xl font-bold text-gray-400 py-6 hover:text-teal-400">
              PRIMARY
            </h2>
            <h3 className="text-md font-semibold">
              ROJAS ELEMENTARY SCHOOL / 1998-2004
            </h3>
            <p>Cotabato City, Philippines</p>
          </div>
          <div className="bg-[#112240] rounded-md p-10 hover:scale-105 duration-100">
            <h2 className="text-xl font-bold text-gray-400 py-6 hover:text-teal-400">
              SECONDARY
            </h2>
            <h3 className="text-md font-semibold">
              ROJAS NATIONAL HIGH SCHOOL / 2004-2008
            </h3>
            <p>Cotabato City, Philippines</p>
          </div>
          <div className="bg-[#112240] rounded-md p-10 hover:scale-105 duration-100">
            <h2 className="text-xl font-bold text-gray-400 py-6 hover:text-teal-400">
              TERTIARY
            </h2>
            <h3 className="text-md font-semibold">
              THE UNIVERSITY OF MINDANAO / 2009-2014
            </h3>
            <p>Davao City, Philippines</p>
            <p></p>
          </div>
        </div>
        <h2 className="md:mx-0 mx-auto text-5xl font-bold  font-JosefinSans mt-20 text-gray-400">
          EXPERIENCE
        </h2>
        <div className="flex flex-col md:flex-row mx-auto space-y-10 md:space-y-0 md:space-x-10 py-10 md:px-0 px-20">
          <div className="bg-[#112240] rounded-md p-10 hover:scale-105 duration-100">
            <h2 className="text-xl font-bold text-gray-400 pt-6 hover:text-teal-400">
              {' '}
              DAVAO METRO SHUTTLE CORPORATION
            </h2>
            <h3 className="text-md font-semibold mb-5">
              MOBILE APP DEVELOPER / SEPT. 2015 - JULY 2016
            </h3>
            <p>
              I developed an Android mobile application to monitor the income
              revenue of the company.
            </p>
          </div>
          <div className="bg-[#112240] rounded-md p-10 hover:scale-105 duration-100">
            <h2 className="text-xl font-bold text-gray-400 pt-6 hover:text-teal-400">
              {' '}
              BDO UNIBANK, INC.
            </h2>
            <h3 className="text-md font-semibold  mb-5">
              FULL STACK WEB DEVELOPER / AUGUST 2014 - PRESENT
            </h3>
            <p>
              {' '}
              I developed an Android mobile application to monitor the income
              revenue of the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
