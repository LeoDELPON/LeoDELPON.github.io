import type { NextPage } from "next";
import RootComponent from "../component/root";

import Header from "../component/organism/header/Header";
import About from "../component/organism/about";
import Experience from "../component/organism/experience";
import GetInTouch from "../component/organism/contact/getInTouch";
import Work from "../component/organism/work";

const Home: NextPage = () => {
  return (
    <RootComponent>
      <Header />
      <About />
      <Experience />
      <Work />
      <GetInTouch />
    </RootComponent>
  );
};

export default Home;
