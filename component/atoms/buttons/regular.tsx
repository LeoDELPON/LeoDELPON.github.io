import React from "react";

import Link from "next/link";

interface RegularBtnProps {
  isLink?: boolean;
  href?: string;
  download?: string;
  onClickBtn?: () => void;
  label: string;
}

const RegularBtn = ({
  isLink = false,
  href = "",
  download = "",
  onClickBtn = () => {},
  label,
}: RegularBtnProps): JSX.Element => {
  return isLink ? (
    <Link href={href}>
      {download ? (
        <a
          className="text-emeraud-blue-bright border text-sm font-medium justify-center border-emeraud-blue-bright flex items-center px-3 py-4 rounded transition duration-300 linear hover:bg-emeraud-blue-light"
          download={download}
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <a
          className="text-emeraud-blue-bright border text-sm font-medium justify-center border-emeraud-blue-bright flex items-center px-3 py-4 rounded transition duration-300 linear hover:bg-emeraud-blue-light"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      )}
    </Link>
  ) : (
    <button
      onClick={() => {
        onClickBtn();
      }}
      className="text-emeraud-blue-bright border text-sm font-medium justify-center border-emeraud-blue-bright flex items-center px-3 py-4 rounded transition duration-300 linear hover:bg-emeraud-blue-light"
    >
      {label}
    </button>
  );
};

export default RegularBtn;
