import React from "react";

import { vertFadeInScroll } from "../../../gsap/verticalFadeIn";

const Experience = () => {
  let experienceRef = React.useRef(null);

  React.useEffect(() => {
    vertFadeInScroll(experienceRef.current, 80);
  }, []);

  return (
    <section
      className="grid 2xl:px-52 py-16 overflow-x-hidden"
      id="experience"
      ref={experienceRef}
    >
      <div className="section-block flex items-center justify-start">
        <span className="text-2xl md:text-3xl font-medium text-emeraud-blue-bright">
          02.
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white-grayish pl-4 w-full tracking-wider">
          Timeline.render( )
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-timeline pt-32" src="/timeline.svg" />
      </div>
    </section>
  );
};

export default Experience;
