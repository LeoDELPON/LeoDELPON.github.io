import React from "react";

interface HamburgerProps {
  onClickHamburgerLogo: () => void;
}

const Hamburger = ({ onClickHamburgerLogo }: HamburgerProps): JSX.Element => {
  return (
    <div
      className="p-3 space-y-1 bg-transparent border border-emeraud-blue  rounded-lg shadow"
      onClick={() => {
        onClickHamburgerLogo();
      }}
    >
      <span className="block w-5 h-0.5 bg-emeraud-blue hover:animate-pulse rounded"></span>
      <span className="block w-5 h-0.5 bg-emeraud-blue hover:animate-pulse rounded"></span>
      <span className="block w-5 h-0.5 bg-emeraud-blue hover:animate-pulse rounded"></span>
    </div>
  );
};

export default Hamburger;
