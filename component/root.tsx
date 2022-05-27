import React from 'react';
import Navigation from './organism/navigation';
import SideFooterLink from './organism/footer/sideFooter';

interface RootComponentProps {
  children: React.ReactNode;
  bgColor?: string;
}

/**
 * @param {React.ReactNode} children React children element that will be wrapped by RootComponent
 * @return {JSX.Element} The page content wrapped by RootComponent
 */

const RootComponent = ({
  children,
  bgColor = 'bg-dark-blue',
}: RootComponentProps): JSX.Element => {
  return (
    <div className={`w-full ${bgColor} grid place-items-center`}>
      <div className="grid place-content-center w-full bg-black py-4">
        <a
          href="https://www.savethechildren.org/us/where-we-work/ukraine"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-white font-medium space-x-2"
        >
          <p>#StopWarInUkraine </p>
          <svg viewBox="0 0 512 512" width="20" height="20">
            <rect
              fill="#2a75e6"
              height="352"
              rx="10"
              width="496"
              x="8"
              y="80"
            ></rect>
            <path
              d="M8,256H504a0,0,0,0,1,0,0V422a10,10,0,0,1-10,10H18A10,10,0,0,1,8,422V256a0,0,0,0,1,0,0Z"
              fill="#f9d549"
            ></path>
          </svg>
          <p>Save the children</p>
        </a>
      </div>
      <div className={`2xl:w-1840px w-full`}>
        <Navigation />
        <main className="lg:px-24 px-8">{children}</main>
        <SideFooterLink />
      </div>
    </div>
  );
};

export default RootComponent;
