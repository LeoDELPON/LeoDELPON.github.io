import React from "react";

import Link from "next/link";

import { vertFadeInScroll } from "../../../gsap/verticalFadeIn";

const About = (): JSX.Element => {
  let aboutRef = React.useRef(null);

  React.useEffect(() => {
    vertFadeInScroll(aboutRef.current, -80);
  }, []);

  return (
    <section
      className="grid place-content-center 2xl:px-52 py-16 "
      id="about"
      ref={aboutRef}
    >
      <div className="section-block flex items-center">
        <span className="text-2xl md:text-3xl font-medium text-emeraud-blue-bright">
          01.
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white-grayish pl-4 w-full tracking-wider">
          About.me( )
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 pt-8">
        <div className="">
          <p className="text-white-grayish  font-medium">
            Hello to you my dear visitor! My name is Léo and I am currently a
            student in an engineering college. I love making websites for fun ,
            discovering new technologies and best practices. My interest in web
            development started in 2020 when I had my first internship. I was
            working for{" "}
            <Link href="https://www.idaia.group/fr/?levier=SEA&gclid=CjwKCAiAgbiQBhAHEiwAuQ6BkrrJTr66BIv1qufyIJNWI4BKQGizI_Uk-xEu8bTsAvM4GXqg_K-o8RoCXF8QAvD_BwE">
              <a className="text-link text-emeraud-blue-bright opacity-100 hover:text-emeraud-blue transition duration-300 linear">
                IDAIA
              </a>
            </Link>{" "}
            as backend developer in .NET Core. It turns out that I learnt a lot
            thanks to this internship. During my third year of college, I did
            another one but at{" "}
            <Link href="https://www.lectra.com/fr">
              <a className="text-link text-emeraud-blue-bright opacity-100 hover:text-emeraud-blue transition duration-300 linear">
                Lectra
              </a>
            </Link>{" "}
            as a frontend developer using React.js/Redux/Redux-Saga. With these
            two enriching experiences, I started doing free-lancing as
            full-stack developer.
          </p>
          <p className="text-white-grayish font-medium pt-4">
            Beside web development, I also love doing web scraping / crawling.
            After scraping datas, I like making dashboard with anaylized and
            rendered data.
          </p>
          <p className="text-white-grayish font-medium pt-4">
            The last but not the least, I started to work in crypto universe. I
            developed a simple website for{" "}
            <Link href="https://blitznetwork.netlify.app/onboarding/individual/">
              <a className="text-link text-emeraud-blue-bright opacity-100 hover:text-emeraud-blue transition duration-300 linear">
                Blitz Network
              </a>
            </Link>{" "}
            company. I also worked for{" "}
            <Link href="https://slp-new.netlify.app/">
              <a className="text-link text-emeraud-blue-bright opacity-100 hover:text-emeraud-blue transition duration-300 linear">
                SLP Foundation
              </a>
            </Link>{" "}
            which is a foundation created by BCH stakeholders in late 2019.
            Currently I am developping a new website version for{" "}
            <Link href="https://www.tokenart.org/tokenart">
              <a className="text-link text-emeraud-blue-bright opacity-100 hover:text-emeraud-blue transition duration-300 linear">
                Tokenart
              </a>
            </Link>
          </p>
        </div>
        <div className="flex justify-center items-center py-8">
          <img className="lg:w-80 lg:h-80" src="/leo-profil.jfif" />
        </div>
      </div>
    </section>
  );
};

export default About;
