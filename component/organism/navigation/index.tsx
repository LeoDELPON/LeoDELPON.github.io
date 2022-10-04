import React from 'react';

import Link from 'next/link';

import Hamburger from '../../atoms/buttons/hamburger';

import { vertFadeInPres } from '../../../gsap/verticalFadeIn';

interface NavigationComponentProps {}

/**
 *
 */

const Navigation = () => {
  const [displaySideBar, setDisplaySideBar] = React.useState<boolean>(false);
  let aboutRef = React.useRef(null);
  let experienceRef = React.useRef(null);
  let workRef = React.useRef(null);
  let serviceRef = React.useRef(null);
  let contactRef = React.useRef(null);
  let btnRef = React.useRef(null);

  const onDisplaySideBar = () => {
    setDisplaySideBar(!displaySideBar);
  };

  React.useEffect(() => {
    vertFadeInPres(aboutRef.current, 1, 2);
    vertFadeInPres(experienceRef.current, 1, 2.25);
    vertFadeInPres(workRef.current, 1, 2.5);
    vertFadeInPres(serviceRef.current, 1, 2.75);
    vertFadeInPres(contactRef.current, 1, 3);
    vertFadeInPres(btnRef.current, 1, 3.25);
  }, []);

  return (
    <>
      <nav className="grid grid-cols-12 pt-4 w-screen">
        <div className="col-span-6 pl-4 place-items-end lg:pl-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="42"
            height="42"
            viewBox="0 0 240 240"
          >
            <defs>
              <clipPath id="clip-MatR_Logo">
                <rect width="240" height="240" />
              </clipPath>
            </defs>
            <g
              id="MatR_Logo"
              data-name="MatR Logo"
              clipPath="url(#clip-MatR_Logo)"
            >
              <g
                id="Composant_2_1"
                data-name="Composant 2 – 1"
                transform="translate(15 57)"
              >
                <rect
                  id="Rectangle_2"
                  data-name="Rectangle 2"
                  width="180"
                  height="38"
                  rx="16"
                  fill="#a2f5b5"
                />
                <path
                  id="Polygone_2"
                  data-name="Polygone 2"
                  d="M53.786,14.435a16,16,0,0,1,24.428,0l31.5,37.23A16,16,0,0,1,97.5,78h-63A16,16,0,0,1,22.284,51.665Z"
                  transform="translate(109.077 3.355) rotate(90)"
                  fill="#a2f5b5"
                />
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="180"
                  height="38"
                  rx="16"
                  transform="translate(0 99)"
                  fill="#a2f5b5"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="grid col-span-6 pr-4 place-self-end lg:pr-8">
          <ul className="items-center hidden space-x-5 lg:flex">
            <li
              className="font-medium tracking-wider text-white text-nav-sm"
              ref={aboutRef}
            >
              <Link href="#about" scroll={false}>
                <a>.about( )</a>
              </Link>
            </li>
            <li
              className="font-medium tracking-wider text-white text-nav-sm"
              ref={experienceRef}
            >
              <Link href="#experience">
                <a>.experience( )</a>
              </Link>
            </li>
            <li
              className="font-medium tracking-wider text-white text-nav-sm"
              ref={workRef}
            >
              <Link href="#work">
                <a>.work( )</a>
              </Link>
            </li>
            <li
              className="font-medium tracking-wider text-white text-nav-sm"
              ref={serviceRef}
            >
              <Link href="#service">
                <a>.service( )</a>
              </Link>
            </li>
            <li
              className="font-medium tracking-wider text-white text-nav-sm"
              ref={contactRef}
            >
              <Link href="mailto:delponleo@gmail.com">
                <a>.contact( )</a>
              </Link>
            </li>
            <li ref={btnRef}>
              <Link href="/resume_leo_delpon.pdf">
                <a
                  className="flex items-center px-3 py-4 font-medium transition duration-300 border rounded button text-emeraud-blue-bright text-nav-sm border-emeraud-blue-bright linear hover:bg-emeraud-blue-light"
                  download="resume_leo_delpon.pdf"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Link>
            </li>
          </ul>
          <button className="block lg:hidden">
            <Hamburger onClickHamburgerLogo={onDisplaySideBar} />
          </button>
          <div
            className={`${
              displaySideBar ? 'block' : 'hidden w-0'
            } lg:hidden fixed z-50 w-[180px] h-screen right-3  bg-darker-blue rounded-lg`}
          >
            <nav className="grid h-full grid-row-3">
              <div className="p-2" onClick={() => onDisplaySideBar()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="grid space-y-5 place-content-center">
                <div className="font-medium tracking-wider text-white">
                  <Link href="#about">
                    <a>.about( )</a>
                  </Link>
                </div>
                <div className="font-medium tracking-wider text-white">
                  <Link href="#experience">
                    <a>.experience( )</a>
                  </Link>
                </div>
                <div className="font-medium tracking-wider text-white">
                  <Link href="#work">
                    <a>.work( )</a>
                  </Link>
                </div>
                <div className="font-medium tracking-wider text-white">
                  <Link href="#service">
                    <a>.service( )</a>
                  </Link>
                </div>
                <div className="font-medium tracking-wider text-white">
                  <Link href="mailto:delponleo@gmail.com">
                    <a>.contact( )</a>
                  </Link>
                </div>
              </div>
              <div className="px-8">
                <Link href="/resume_leo_delpon.pdf">
                  <a
                    className="flex items-center justify-center px-3 py-4 font-medium transition duration-300 border rounded button text-emeraud-blue-bright text-nav-sm border-emeraud-blue-bright linear hover:bg-emeraud-blue-light"
                    download="resume_leo_delpon.pdf"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
