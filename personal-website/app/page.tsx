import React from "react";
import GlobalNavbar from "./components/Global/GlobalNavbar/GlobalNavbar";
import MainPageBackground from "./components/Other/MainPageBackground/MainPageBackground";
import MainPageHeroText from "./components/Other/MainPageHeroText/MainPageHeroText";

const page = () => {
  return (
    <div>
      <GlobalNavbar />
      <MainPageBackground />
      <MainPageHeroText />
    </div>
  );
};

export default page;
