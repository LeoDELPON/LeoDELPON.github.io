import React from "react";
import Navigation from "./organism/navigation";
import SideFooterLink from "./organism/footer/sideFooter";

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
  bgColor = "bg-dark-blue",
}: RootComponentProps): JSX.Element => {
  return (
    <div className={`w-full ${bgColor} grid place-items-center`}>
      <div className={`2xl:w-1840px w-full`}>
        <Navigation />
        <main className="lg:px-24 px-8">{children}</main>
        <SideFooterLink />
      </div>
    </div>
  );
};

export default RootComponent;
