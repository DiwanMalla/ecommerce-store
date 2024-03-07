import Intro from "./Intro";
import Name from "./Name";

import SocialMedia from "./SocialMedia";
import Contact from "./contact";
import Skills from "./mySkills";

const MainPage = () => {
  return (
    <div>
      <Name />
      <Intro />
      <Skills />
      <Contact />
      <SocialMedia />
    </div>
  );
};

export default MainPage;
