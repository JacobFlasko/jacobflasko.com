import React from "react";
import Navbar from "./components/global/Navbar/Navbar";
import HeroText from "./components/Home/HeroText/HeroText";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      {/* First Section for hero text and icons */}
      <section className="flex flex-col space-y-24 lg:space-y-36 h-screen w-full justify-center items-center">
        <div className="flex space-x-16 md:space-x-32 lg:space-x-48 xl:space-x-72">
          <Image
            src=""
            width={175}
            height={175}
            alt="Javascript Icon"
            className="shadow-2xl shadow-yellow-300"
          />
          <Image
            src=""
            width={175}
            height={175}
            alt="Javascript Icon"
            className="shadow-2xl shadow-red-500"
          />
          <Image
            src=""
            width={175}
            height={175}
            alt="Javascript Icon"
            className="shadow-2xl shadow-blue-300"
          />
        </div>
        <HeroText />
        <div className="flex space-x-16 md:space-x-32 lg:space-x-48 xl:space-x-72">
          <Image
            src="/Home/next.svg"
            width={175}
            height={175}
            alt="Javascript Icon"
            className="shadow-2xl shadow-red-300"
          />
          <Image
            src=""
            width={175}
            height={175}
            alt="Javascript Icon"
            className="shadow-2xl shadow-yellow-300"
          />
          <Image
            src=""
            width={175}
            height={175}
            alt="Javascript Icon"
            className="shadow-2xl shadow-yellow-300"
          />
        </div>
      </section>
    </>
  );
};

export default page;
