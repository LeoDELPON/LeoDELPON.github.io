import React from "react";

import Link from "next/link";

import { GITHUB, LINKEDIN, MALT } from "../../../constants/urls";

const SideFooterLink = () => {
  return (
    <div className="fixed bottom-28 pl-8 hidden lg:block">
      <ul className="space-y-4">
        <li className="text-white text-nav-sm font-medium tracking-wider">
          <Link href={GITHUB}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="transform hover:-translate-y-1 w-5 h-5 hover:text-emeraud-blue-bright transition duration-200 ease-in"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </Link>
        </li>
        <li className="text-white text-nav-sm font-medium tracking-wider">
          <Link href={LINKEDIN}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="transform hover:-translate-y-1 w-5 h-5 hover:text-emeraud-blue-bright transition duration-200 ease-in"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </Link>
        </li>
        <li className="text-white text-nav-sm font-medium tracking-wider last-footer-item">
          <Link href={MALT}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transform hover:-translate-y-1 w-5 h-5 hover:text-emeraud-blue-bright transition duration-200 ease-in"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideFooterLink;
