import React from 'react';

import Link from 'next/link';

import { vertFadeInScroll } from '../../../gsap/verticalFadeIn';

interface WorkComponentProps {
  title: string;
  category: string;
  imageSource: string;
  content: string;
  pins: string[];
  source: string;
  index: number;
}

const WorkComponent = ({
  title,
  category,
  imageSource,
  content,
  pins,
  source,
  index,
}: WorkComponentProps) => {
  const isPair = index % 2 !== 0;
  let workRefComponent = React.useRef(null);

  React.useEffect(() => {
    vertFadeInScroll(workRefComponent.current, isPair ? 80 : -80);
  }, []);

  return (
    <div
      className="relative grid md:grid-cols-12 py-16 overflow-x-hidden w-full"
      ref={workRefComponent}
    >
      {!isPair &&
        (source ? (
          <Link href={source}>
            <a
              target="_blank"
              className="hidden col-span-6 md:flex md:items-center p-2 relative left-9 opacity-70 hover:opacity-40 transition duration-300 linear"
            >
              <img className="" src={imageSource} alt={`image of ${title}`} />
            </a>
          </Link>
        ) : (
          <div className="hidden col-span-6 md:flex md:items-center p-2 relative left-9 opacity-70">
            <img className="" src={imageSource} alt={`image of ${title}`} />
          </div>
        ))}
      <div
        className={`md:col-span-6 relative z-20 ${
          isPair ? 'col-start-1' : 'col-start-7'
        } my-auto`}
      >
        {source ? (
          <Link href={source}>
            <a target="_blank">
              <div className={``}>
                <h4
                  className={`text-emeraud-blue-bright font-medium text-sm tracking-wide ${
                    isPair ? 'text-left' : 'text-right'
                  }`}
                >
                  {category}
                </h4>
                <h3
                  className={`text-white-grayish font-medium tracking-wider text-xl ${
                    isPair ? 'text-left' : 'text-right'
                  }`}
                >
                  {title}
                </h3>
              </div>
            </a>
          </Link>
        ) : (
          <div className={``}>
            <h4
              className={`text-emeraud-blue-bright font-medium text-sm tracking-wide ${
                isPair ? 'text-left' : 'text-right'
              }`}
            >
              {category}
            </h4>
            <h3
              className={`text-white-grayish font-medium tracking-wider text-xl ${
                isPair ? 'text-left' : 'text-right'
              }`}
            >
              {title}
            </h3>
          </div>
        )}
        <div className="pt-4">
          <div
            className={`text-white-grayish text-sm p-4 bg-dark-blue-bright rounded-sm shadow-xl font-medium ${
              isPair ? 'text-left' : 'text-right'
            }`}
          >
            <p className="opacity-60">{content}</p>
          </div>
        </div>
        <div
          className={`flex flex-wrap space-x-2 pt-4 ${
            isPair ? 'justify-start' : 'justify-end'
          }`}
        >
          {pins.map((pin, index) => (
            <span
              key={`${pin}_${index}`}
              className="px-4 bg-white my-2 opacity-40 text-sm rounded-full flex items-center font-medium text-gray-700"
            >
              {pin}
            </span>
          ))}
        </div>
        <div
          className={`grid pt-2 ${
            isPair ? 'place-items-start' : 'place-items-end'
          }`}
        >
          {source && (
            <Link href={source}>
              <a className="" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white hover:text-emeraud-blue-bright transition duration-300 linear"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </Link>
          )}
        </div>
      </div>
      {isPair &&
        (source ? (
          <Link href={source}>
            <a
              target="_blank"
              className="hidden col-span-6 md:flex md:items-center p-2 relative right-7 z-10 hover:opacity-40 transition duration-300 linear"
            >
              <img
                className="opacity-70"
                src={imageSource}
                alt={`image of ${title}`}
              />
            </a>
          </Link>
        ) : (
          <div className="hidden col-span-6 md:flex md:items-center p-2 relative right-7 z-10">
            <img
              className="opacity-70"
              src={imageSource}
              alt={`image of ${title}`}
            />
          </div>
        ))}
    </div>
  );
};

export default WorkComponent;
