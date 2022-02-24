import React from "react";

import Link from "next/link";

import Hamburger from "../../atoms/buttons/hamburger";

import { vertFadeInPres } from "../../../gsap/verticalFadeIn";

interface NavigationComponentProps {}

/**
 *
 */

const Navigation = () => {
  const [displaySideBar, setDisplaySideBar] = React.useState<boolean>(false);
  let aboutRef = React.useRef(null);
  let experienceRef = React.useRef(null);
  let workRef = React.useRef(null);
  let contactRef = React.useRef(null);
  let btnRef = React.useRef(null);

  const onDisplaySideBar = () => {
    setDisplaySideBar(!displaySideBar);
  };

  React.useEffect(() => {
    vertFadeInPres(aboutRef.current, 1, 2);
    vertFadeInPres(experienceRef.current, 1, 2.25);
    vertFadeInPres(workRef.current, 1, 2.5);
    vertFadeInPres(contactRef.current, 1, 2.75);
    vertFadeInPres(btnRef.current, 1, 3);
  }, []);

  return (
    <nav className="grid grid-cols-12 pt-4">
      <div className="col-span-6 lg:pl-8 pl-4">logo</div>
      <div className="col-span-6 grid place-self-end pr-4 lg:pr-8">
        <ul className="lg:flex hidden space-x-5 items-center">
          <li
            className="text-white text-nav-sm font-medium tracking-wider"
            ref={aboutRef}
          >
            <Link href="/#about" scroll={false}>
              <a>.about( )</a>
            </Link>
          </li>
          <li
            className="text-white text-nav-sm font-medium tracking-wider"
            ref={experienceRef}
          >
            <Link href="#about">
              <a>.experience( )</a>
            </Link>
          </li>
          <li
            className="text-white text-nav-sm font-medium tracking-wider"
            ref={workRef}
          >
            <Link href="#about">
              <a>.work( )</a>
            </Link>
          </li>
          <li
            className="text-white text-nav-sm font-medium tracking-wider"
            ref={contactRef}
          >
            <Link href="mailto:delponleo@gmail.com">
              <a>.contact( )</a>
            </Link>
          </li>
          <li ref={btnRef}>
            <Link href="/resume_leo_delpon.pdf">
              <a
                className="button text-emeraud-blue-bright border text-nav-sm font-medium border-emeraud-blue-bright flex items-center px-3 py-4 rounded transition duration-300 linear hover:bg-emeraud-blue-light"
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
            displaySideBar ? "block" : "hidden w-0"
          } lg:hidden fixed z-50 w-[180px] h-screen right-3  bg-darker-blue rounded-lg`}
        >
          <nav className="grid grid-row-3 h-full">
            <div className="p-2" onClick={() => onDisplaySideBar()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <div className="grid place-content-center space-y-5">
              <div className="font-medium text-white tracking-wider">
                <Link href="/#about">
                  <a>.about( )</a>
                </Link>
              </div>
              <div className="font-medium text-white tracking-wider">
                <Link href="#about">
                  <a>.experience( )</a>
                </Link>
              </div>
              <div className="font-medium text-white tracking-wider">
                <Link href="#about">
                  <a>.work( )</a>
                </Link>
              </div>
              <div className="font-medium text-white tracking-wider">
                <Link href="mailto:delponleo@gmail.com">
                  <a>.contact( )</a>
                </Link>
              </div>
            </div>
            <div className="px-8">
              <Link href="/resume_leo_delpon.pdf">
                <a
                  className="button text-emeraud-blue-bright border text-nav-sm font-medium border-emeraud-blue-bright flex items-center justify-center px-3 py-4 rounded transition duration-300 linear hover:bg-emeraud-blue-light"
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
  );
};

export default Navigation;
