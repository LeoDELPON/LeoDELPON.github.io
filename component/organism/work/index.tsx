import React from 'react';

import WorkComponent from '../../molecule/work/workComponent';
import { works } from '../../../constants/works';

const Work = () => {
  const [workData, setWorkData] = React.useState<typeof works>();
  const [hasReached, setHasReached] = React.useState<boolean>(false);
  const [content, setContent] = React.useState(2);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    const tmp = works.slice(0, content);
    setWorkData(tmp);
    setContent(content + 2);
  }, []);

  const onLoadMoreWork = () => {
    if(content !== works.length) {
      setContent(content + 2);
    } else {
      setHasReached(!hasReached)
    }

    setWorkData(works.slice(0, content));
  };


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
        {workData &&
          workData.map((work, index) => {
            return (
              <div key={index}>
                <WorkComponent
                  title={work?.title}
                  category={work?.category}
                  content={work?.content}
                  pins={work?.tags}
                  imageSource={work?.img}
                  source={work?.source ?? ''}
                  index={index}
                />
              </div>
            );
          })}
      </div>
      {
        !hasReached && (
        <div className="grid place-content-center">
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onClick={() => {
              onLoadMoreWork();
            }}
            className="button cursor-pointer text-emeraud-blue-bright border text-nav-sm font-medium border-emeraud-blue-bright flex items-center px-3 py-2 rounded transition duration-300 linear hover:bg-emeraud-blue-light"
          >
            <p>See More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              className={`text-[#00E0BC] fill-current transition duration-500 ease ${
                hover ? 'translate-y-1' : 'translate-y-0'
              }`}
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
            </svg>
          </div>
        </div>
        )
      }
      
    </section>
  );
};

export default Work;
