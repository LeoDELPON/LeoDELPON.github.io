import React from 'react';

import ServiceGrid from '../../molecule/services/service-grid';

import { vertFadeInScroll } from '../../../gsap/verticalFadeIn';

const Services = () => {
  let experienceRef = React.useRef(null);

  React.useEffect(() => {
    vertFadeInScroll(experienceRef.current, 80);
  }, []);

  return (
    <section
      className="grid 2xl:px-52 py-16 overflow-x-hidden"
      id="service"
      ref={experienceRef}
    >
      <div className="section-block flex items-center justify-start">
        <span className="text-2xl md:text-3xl font-medium text-emeraud-blue-bright">
          04.
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white-grayish pl-4 w-full tracking-wider">
          Service.retrieve( )
        </h3>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 space-x-8 py-8">
        <ServiceGrid
          title="Full-stack developer"
          content="As a student, I offer my services to develop your web application. It can be a portfolio site or a specific page to realize. Moreover, I can also develop website marketplace while accompanying you on the choices in your payment system or other micro-services such as emailing. Then, I can accompany you for the deployment of your website. Finally, I also have SEO skills that will help you increase your ranking in search engines.

          Translated with www.DeepL.com/Translator (free version)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            className="text-white fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z" />
          </svg>
        </ServiceGrid>
        <ServiceGrid
          title="Data crawling and scraping"
          content="If you are looking to automate processes or harvest public data, I offer my services as a data scraper. To be more precise, I automate recurring tasks such as social network management or email campaigns management. I can also collect data such as ads, products or emails if the law allows it. To do so, I use python as a tool."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            className="text-white fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z" />
          </svg>
        </ServiceGrid>
        <ServiceGrid
          title="UI / UX Designer"
          content="If you are essentially looking for a UI-UX designer, I also offer my services as a web designer. My skills are much stronger as a UX designer than as a UI designer however, I usually work with a UI designer in all my projects, which allows me to have a better overview. "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            className="text-white fill-current"
          >
            <g>
              <rect fill="none" height="24" width="24" />
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g />
              <g>
                <path d="M16.24,11.51l1.57-1.57l-3.75-3.75l-1.57,1.57L8.35,3.63c-0.78-0.78-2.05-0.78-2.83,0l-1.9,1.9 c-0.78,0.78-0.78,2.05,0,2.83l4.13,4.13L3.15,17.1C3.05,17.2,3,17.32,3,17.46v3.04C3,20.78,3.22,21,3.5,21h3.04 c0.13,0,0.26-0.05,0.35-0.15l4.62-4.62l4.13,4.13c1.32,1.32,2.76,0.07,2.83,0l1.9-1.9c0.78-0.78,0.78-2.05,0-2.83L16.24,11.51z M9.18,11.07L5.04,6.94l1.89-1.9c0,0,0,0,0,0l1.27,1.27L7.73,6.8c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0 l0.48-0.48l1.45,1.45L9.18,11.07z M17.06,18.96l-4.13-4.13l1.9-1.9l1.45,1.45l-0.48,0.48c-0.39,0.39-0.39,1.02,0,1.41 c0.39,0.39,1.02,0.39,1.41,0l0.48-0.48l1.27,1.27L17.06,18.96z" />
                <path d="M20.71,7.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34c-0.47-0.47-1.12-0.29-1.41,0l-1.83,1.83l3.75,3.75L20.71,7.04z" />
              </g>
            </g>
          </svg>
        </ServiceGrid>
      </div>
    </section>
  );
};

export default Services;
