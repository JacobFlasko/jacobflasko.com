import React from "react";
import Navbar from "./components/global/Navbar/Navbar";
import HeroText from "./components/Home/HeroText/HeroText";
import Image from "next/image";
//CSS Style Import
import styles from "./styles.module.css";
//Images
import { FaReact } from "react-icons/fa";

const page = () => {
  return (
    <div className="snap-mandatory">
      <Navbar />
      {/* First Section for hero text and icons */}
      <section className="flex flex-col space-y-24 lg:space-y-36 h-screen w-full justify-center items-center snap-center">
        <div className="flex space-x-16 md:space-x-32 lg:space-x-48 xl:space-x-72">
          <Image
            src="/Home/javascriptIcon.png"
            width={175}
            height={175}
            alt="Javascript Icon"
            className={`shadow-2xl shadow-yellow-300 -rotate-12 ${styles.bump}`}
          />
          <Image
            src="/Home/github_icon.png"
            width={175}
            height={175}
            alt="Github Icon"
            className={`shadow-2xl shadow-red-500  ${styles.bump_delay}`}
          />
          <Image
            src="/Home/react_icon.png"
            width={175}
            height={175}
            alt="React Icon"
            className={`shadow-2xl shadow-blue-300 rotate-12 ${styles.bump}`}
          />
        </div>
        <HeroText />
        <div className="flex space-x-16 md:space-x-32 lg:space-x-48 xl:space-x-72">
          <Image
            src=""
            width={175}
            height={175}
            alt="HTML 5 Icon"
            className={`shadow-2xl shadow-red-300 rotate-12 ${styles.bump_delay}`}
          />
          <Image
            src=""
            width={175}
            height={175}
            alt="Python Icon"
            className={`shadow-2xl shadow-yellow-300  ${styles.bump}`}
          />
          <Image
            src=""
            width={175}
            height={175}
            alt="NextJS Icon"
            className={`shadow-2xl shadow-black -rotate-12 ${styles.bump_delay}`}
          />
        </div>
      </section>
      {/*Second Section */}
      <section className="w-full h-screen bg-red-500 snap-center"></section>
    </div>
  );
};

export default page;
