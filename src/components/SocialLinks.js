import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

export default function SocialLinks() {
  const social_links = [
    {
      id: 1,
      title: 'Facebook',
      child: (
        <>
          <FontAwesomeIcon
            className=" cursor-pointer hover:scale-105 duration-200"
            icon={faFacebookSquare}
            size="xl"
          />
        </>
      ),
      href: 'https://web.facebook.com/aljonmoliva',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      title: 'Github',
      child: (
        <>
          <FontAwesomeIcon
            className=" cursor-pointer hover:scale-105 duration-200"
            icon={faGithubSquare}
            size="xl"
          />
        </>
      ),
      href: 'https://github.com/admworx88',
    },
    {
      id: 3,
      title: 'LinkedIn',
      child: (
        <>
          <FontAwesomeIcon
            className=" cursor-pointer hover:scale-105 duration-200"
            icon={faLinkedin}
            size="xl"
          />
        </>
      ),
      href: 'https://www.linkedin.com/in/aljonmoliva/',
    },
    {
      id: 4,
      title: 'Resume',
      child: (
        <>
          <FontAwesomeIcon
            className=" cursor-pointer hover:scale-105 duration-200"
            icon={faUserNinja}
            size="xl"
          />
        </>
      ),
      href: 'cv.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {social_links.map(({ id, title, child, href, style, download }) => (
          <li
            key={id}
            className={
              'cursor-pointer flex justify-between pl-5 items-center w-36 h-1/4 px-3 py-4 ml-[-100px] hover:ml-[-5px]  hover:rounded-md duration-300 bg-black bg-opacity-50' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full  text-white hover:text-teal-400"
              target="_blank"
              download={download}
              rel="noreferrer"
            >
              {title}
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
