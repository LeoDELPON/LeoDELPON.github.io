import React from "react";

import RegularBtn from "../../atoms/buttons/regular";

import horFadeInPres from "../../../gsap/horizontalFadeIn";
import { vertFadeInPres } from "../../../gsap/verticalFadeIn";

const Header = () => {
  let titlePresentation = React.useRef<null | HTMLDivElement>(null);
  let contentPresentation = React.useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    horFadeInPres(titlePresentation.current, 2, 1);
    vertFadeInPres(contentPresentation.current, 2, 1.5);
  }, []);

  return (
    <div className="grid place-content-center h-header pt-12 pb-8 md:pb-2">
      <div ref={titlePresentation}>
        <p className="text-emeraud-blue-bright text-sm text font-medium tracking-wider pb-6">
          Hi, my name is
        </p>
        <h1 className="text-white-grayish md:text-big-header text-3xl font-bold pb-4">
          Léo Delpon.
        </h1>
        <h2 className="text-white-grayish opacity-50 md:text-big-header text-3xl font-bold pb-4">
          Creative full-stack developer, <br />
          and UI/UX designer,
        </h2>
      </div>
      <div ref={contentPresentation}>
        <h2 className="text-white-grayish opacity-30 md:text-xl text-2xl font-medium pb-4">
          I build web development services for cryptocurrency.
        </h2>
        <p className="pr-20 text-white-grayish opacity-30 md:text-md text-sm md:font-medium">
          I'm a student specializing in building web applications, microservices{" "}
          <br />
          and landing pages. Currently, I am no self-learning softwares,
          electrical <br /> and cybersecurity engineering through research and
          self-manipulation. <br />
          <strong>PS: I miss your videos Devon Crawford </strong>
        </p>
        <div className="w-44 pt-4">
          <RegularBtn
            isLink
            href={"/resume_leo_delpon.pdf"}
            download={"resume_leo_delpon.pdf"}
            label="Download my resume!"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
