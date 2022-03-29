import React from 'react';

import Link from 'next/link';

import { vertFadeInScroll } from '../../../gsap/verticalFadeIn';

const AboutFriend = (): JSX.Element => {
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
        <div className="flex justify-center items-center py-8">
          <img className="lg:w-80 lg:h-80" src="/bg.jpg" />
        </div>
        <div className="">
          <p className="text-white-grayish  font-medium">
            Hello, my name is Thomas Thierry. I'm 21 years old, I'm passionate
            since my childhood about new technologies and more generally about
            innovation.
          </p>
          <p className="text-white-grayish font-medium pt-4">
            After years of development (Web, Software...), I decided to move
            towards a more marketing part of the job, as well as project
            management, towards which I would like to move in the long term.
          </p>
          <p className="text-white-grayish font-medium pt-4">
            That's why I decided to join forces with Léo Delpon, a friend and
            very good developer with whom I had the opportunity to collaborate
            on multiple projects. The complementarity of our skills has allowed
            us to complete many projects (Website, marketplace, CRM ect...).
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFriend;
