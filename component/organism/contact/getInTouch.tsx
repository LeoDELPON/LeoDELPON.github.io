import React from "react";

import RegularBtn from "../../atoms/buttons/regular";

const GetInTouch = () => {
  return (
    <section
      className="grid place-content-center py-16 2xl:px-52 "
      id="#contact"
    >
      <div className="text-center">
        <div className="flex">
          <h3 className="text-md font-medium text-emeraud-blue-bright pl-4 w-full tracking-wider">
            04. It's time to say goodbye
          </h3>
        </div>
      </div>
      <div className="text-center py-4">
        <h3 className="text-3xl font-bold text-white-grayish pl-4 w-full tracking-wider">
          Get In Touch
        </h3>
      </div>
      <div className="flex items-center justify-center 2xl:px-76 opacity-50 text-white-grayish">
        Currently, I am not looking for any new opportunities, nevertherless my
        emailbox is always open !
      </div>
      <div className="w-full grid place-items-center pt-4">
        <div className="w-44 pt-4 flex justify-center">
          <RegularBtn
            isLink
            href={"mailto:delponleo@gmail.com"}
            label="Say Hello"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
