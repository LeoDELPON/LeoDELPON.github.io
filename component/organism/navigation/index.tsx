import React from "react";

import Link from "next/link";

import Hamburger from "../../atoms/buttons/hamburger";

interface NavigationComponentProps {}

/**
 *
 */

const Navigation = () => {
  const [displaySideBar, setDisplaySideBar] = React.useState<boolean>(false);

  const onDisplaySideBar = () => {
    setDisplaySideBar(!displaySideBar);
  };

  return (
    <nav className="grid grid-cols-12 pt-4">
      <div className="col-span-6 lg:pl-8 pl-4">logo</div>
      <div className="col-span-6 grid place-self-end pr-4 lg:pr-8">
        <ul className="lg:flex hidden space-x-5 items-center">
          <li className="text-white text-nav-sm font-medium tracking-wider">
            <Link href="/#about" scroll={false}>
              <a>.about( )</a>
            </Link>
          </li>
          <li className="text-white text-nav-sm font-medium tracking-wider">
            <Link href="#about">
              <a>.experience( )</a>
            </Link>
          </li>
          <li className="text-white text-nav-sm font-medium tracking-wider">
            <Link href="#about">
              <a>.work( )</a>
            </Link>
          </li>
          <li className="text-white text-nav-sm font-medium tracking-wider">
            <Link href="mailto:delponleo@gmail.com">
              <a>.contact( )</a>
            </Link>
          </li>
          <li>
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
        <aside className="md:hidden">
          <nav>
            <ul className="lg:flex hidden">
              <li className="text-white">About</li>
              <li>Experience</li>
              <li>Work</li>
              <li>Contact</li>
              <li>Resume</li>
            </ul>
          </nav>
        </aside>
      </div>
    </nav>
  );
};

export default Navigation;
