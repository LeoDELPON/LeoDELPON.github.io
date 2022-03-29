import type { NextPage } from 'next';
import RootComponent from '../component/root';

import Header from '../component/organism/header/Header';
import About from '../component/organism/about';
import AboutFriend from '../component/organism/about/myfriend';
import Experience from '../component/organism/experience';
import GetInTouch from '../component/organism/contact/getInTouch';
import Work from '../component/organism/work';

const Home: NextPage = () => {
  return (
    <RootComponent>
      <Header />
      <About />
      <AboutFriend />
      <Experience />
      <Work />
      <GetInTouch />
    </RootComponent>
  );
};

export default Home;
