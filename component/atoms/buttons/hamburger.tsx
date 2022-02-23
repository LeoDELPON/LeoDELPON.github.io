import React from "react";

interface HamburgerProps {
  onClickHamburgerLogo: () => void;
}

const Hamburger = ({ onClickHamburgerLogo }: HamburgerProps): JSX.Element => {
  const [color, setColor] = React.useState<boolean>(false);

  const invertColor = () => {
    setColor(!color);
  };

  return (
    <div
      onMouseEnter={() => invertColor()}
      onMouseLeave={() => invertColor()}
      className={`p-3 space-y-1 border-emeraud-blue border ${
        color ? "bg-emeraud-blue" : "bg-transparent"
      }  rounded-lg shadow transition duration-200 linear`}
      onClick={() => {
        onClickHamburgerLogo();
      }}
    >
      <span
        className={`block w-5 h-0.5 ${
          color ? "bg-dark-blue" : "bg-emeraud-blue"
        } rounded transition duration-200 linear`}
      ></span>
      <span
        className={`block w-5 h-0.5 ${
          color ? "bg-dark-blue" : "bg-emeraud-blue"
        } rounded transition duration-200 linear`}
      ></span>
      <span
        className={`block w-5 h-0.5 ${
          color ? "bg-dark-blue" : "bg-emeraud-blue"
        } rounded transition duration-200 linear`}
      ></span>
    </div>
  );
};

export default Hamburger;
