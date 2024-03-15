import React from "react";
import Navbar from "./components/global/Navbar/Navbar";
import HeroText from "./components/Home/HeroText/HeroText";

const page = () => {
  return (
    <>
      <Navbar />
      {/* First Section for hero text and icons */}
      <section className="flex h-screen w-full justify-center items-center">
        <HeroText />
      </section>
    </>
  );
};

export default page;
