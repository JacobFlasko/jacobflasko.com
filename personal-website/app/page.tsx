import React from "react";
import GlobalNavbar from "./components/Global/GlobalNavbar/GlobalNavbar";
import MainPageHeroText from "./components/Other/MainPageHeroText/MainPageHeroText";
import Image from "next/image";
import { BiRotateRight } from "react-icons/bi";

const Page = () => {
  return (
    <>
      <GlobalNavbar />
      <section className="flex justify-center items-center w-full h-screen flex-col bg-slate-50">
        <div className="w-full flex justify-around m-48">
          <Image
            src={"/images/js.png"}
            width={100}
            height={100}
            alt={"Javascript Icon"}
            className="shadow-2xl w-36 h-36 shadow-yellow-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-2xl w-36 h-36 shadow-red-600"
          />
          <Image
            src={"/heroImages/css.png"}
            width={100}
            height={100}
            alt={"CSS Icon"}
            className="shadow-2xl w-36 h-36 shadow-blue-400"
          />
        </div>
        <div className="w-full">
          <MainPageHeroText />
        </div>
        <div className="w-full flex justify-around m-48">
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-2xl w-36 h-36 shadow-red-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-xl w-36 h-36 shadow-green-400"
          />
          <Image
            src={""}
            alt={"Javascript"}
            className="shadow-2xl w-36 h-36 shadow-yellow-300"
          />
        </div>
      </section>
      {/*Second Section*/}
      <section className="w-auto h-screen bg-indigo-50"></section>
      <section className="w-full h-screen bg-slate-50"></section>
    </>
  );
};

export default Page;
