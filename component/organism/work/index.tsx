import React from "react";

import WorkComponent from "../../molecule/work/workComponent";
import { works } from "../../../constants/works";

const Work = () => {
  return (
    <section className="grid 2xl:px-52 py-16" id="work">
      <div className="section-block flex items-center justify-start">
        <span className="text-2xl md:text-3xl font-medium text-emeraud-blue-bright">
          03.
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white-grayish pl-4 w-full tracking-wider">
          Work.show( )
        </h3>
      </div>
      <div className="grid">
        {works.map((work, index) => {
          return (
            <WorkComponent
              title={work.title}
              category={work.category}
              content={work.content}
              pins={work.tags}
              imageSource={work.img}
              source={work.source}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
