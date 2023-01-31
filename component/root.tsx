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
    <div className={`w-full ${bgColor} grid place-items-center overflow-x-hidden`}>
      <div className="grid place-content-center w-full bg-black py-4">
        <a
          href="https://www.google.com/search?q=argentine+france+2018+a&rlz=1C1ONGR_frFR1028FR1028&sxsrf=AJOqlzW_tJSRDkfSIGmN8aPDOZnn1QPjqQ%3A1675179007087&ei=_zPZY-D-BO-zkdUP4Ku1gAo&ved=0ahUKEwig-puNkPL8AhXvWaQEHeBVDaAQ4dUDCA8&uact=5&oq=argentine+france+2018+a&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIKCAAQgAQQChDLAToHCCMQ6gIQJzoECCMQJzoQCC4QsQMQgwEQxwEQ0QMQQzoRCC4QgwEQxwEQsQMQ0QMQgAQ6CwgAEIAEELEDEIMBOggILhCxAxCDAToLCC4QsQMQgwEQ1AI6BAgAEEM6CwguEK8BEMcBEIAEOgcILhDUAhBDOgQILhBDOgoILhCxAxCDARBDOgoIABCxAxCDARBDOgsILhDUAhCxAxCABDoKCAAQgAQQFBCHAjoLCC4QgAQQsQMQgwE6CgguENQCELEDEEM6CAgAEIAEELEDOg0ILhDUAhCxAxCABBAKOgoIABCABBCxAxAKOggILhCxAxCABEoECEEYAEoECEYYAFAAWNYnYOgoaAFwAXgAgAGPAYgBxQ2SAQQyMC4ymAEAoAEBsAEKwAEB&sclient=gws-wiz-serp#sie=m;/g/11f2wg7b3h;2;/m/030q7;dt;fp;1;;;"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-white font-medium space-x-2"
        >
          <p className="text-xs md:text-sm">#FranceWonInMyHeart </p>
          <svg xmlns="http://www.w3.org/2000/svg" 
          shapeRendering="geometricPrecision" 
          textRendering="geometricPrecision" 
          imageRendering="optimizeQuality" 
          fillRule="evenodd" 
          clipRule="evenodd" 
          className="w-6"
          viewBox="0 0 512 356.18">
            <path fill="#E1000F" d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"/>
            <path fill="#fff" d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"/>
            <path fill="#273375" d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"/>
          </svg>
          <p className="text-xs md:text-sm">French soccer players are the best</p>
        </a>
      </div>
      <div className={`w-screen`}>
        <Navigation />
        <main className="lg:px-24 px-8">{children}</main>
        <SideFooterLink />
      </div>
    </div>
  );
};

export default RootComponent;
