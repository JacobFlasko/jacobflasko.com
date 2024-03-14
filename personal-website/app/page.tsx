import React from "react";
import GlobalNavbar from "./components/Global/GlobalNavbar/GlobalNavbar";
import MainPageHeroText from "./components/Other/MainPageHeroText/MainPageHeroText";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <GlobalNavbar />
      <section className="flex justify-center items-center w-full h-screen flex-col">
        <div className="w-full flex justify-around m-48">
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-yellow-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-yellow-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-yellow-400"
          />
        </div>
        <div className="w-full">
          <MainPageHeroText />
        </div>
        <div className="w-full flex justify-around m-48">
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-yellow-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-yellow-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-yellow-400"
          />
        </div>
      </section>
      <section className="w-auto h-screen bg-red-500"></section>
      <section className="w-full h-screen bg-indigo-500"></section>
    </>
  );
};

export default Page;
