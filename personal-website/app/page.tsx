import React from "react";
import GlobalNavbar from "./components/Global/GlobalNavbar/GlobalNavbar";
import MainPageHeroText from "./components/Other/MainPageHeroText/MainPageHeroText";

const Page = () => {
  return (
    <>
      <GlobalNavbar />
      <section className="flex justify-center items-center w-full h-screen flex-col">
        <div className="w-full flex justify-around">
          <img src="3" alt="#" />
          <img src="3" alt="#" />
          <img src="3" alt="#" />
        </div>
        <div className="w-full m-56">
          <MainPageHeroText />
        </div>
        <div className="w-full flex justify-around">
          <img src="3" alt="#" />
          <img src="3" alt="#" />
          <img src="3" alt="#" />
        </div>
      </section>
      <section className="w-auto h-screen bg-red-500"></section>
      <section className="w-full h-screen bg-indigo-500"></section>
    </>
  );
};

export default Page;
