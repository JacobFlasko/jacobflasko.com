import React from "react";
import Image from "next/image";
//Component Imports
import Navbar from "./components/global/Navbar/Navbar";
import HeroText from "./components/Home/HeroText/HeroText";
import Footer from "./components/global/Footer/Footer";
//CSS Style Import
import styles from "./styles.module.css";
//Images
import { FaReact } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="snap-mandatory">
      <Navbar />
      {/* First Section for hero text and icons */}
      <section className="flex flex-col space-y-24 lg:space-y-36 h-screen w-full justify-center items-center snap-center ">
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
          <span
            className={`shadow-2xl rotate-12 shadow-blue-300  ${styles.bump}`}
          >
            <Image
              src="/Home/react_icon.png"
              width={175}
              height={175}
              alt="React Icon"
            />
          </span>
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
      <section className="w-full h-screen bg-gray-50 snap-center flex justify-center items-center space-x-48">
        <Image
          src={"/Home/programmer_room.svg"}
          alt={"Programmer At Work"}
          width={750}
          height={750}
          className="shadow-2xl p-5"
        />
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl">Hi, Im Jacob</h1>
          <p className="text-xl">
            I am a software developer based in{" "}
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/Pittsburgh,+PA/@40.4314699,-80.0629009,12z/data=!3m1!4b1!4m6!3m5!1s0x8834f16f48068503:0x8df915a15aa21b34!8m2!3d40.4406248!4d-79.9958864!16zL20vMDY4cDI?entry=ttu"
              className="text-indigo-700 font-bold hover:underline"
            >
              Pittsburgh, PA
            </Link>
          </p>
          <p className="text-xl">
            To learn more about me, visit{" "}
            <Link
              className="text-indigo-700 font-bold hover:underline"
              href={"/About"}
            >
              About
            </Link>
          </p>
          <p className="text-xl">
            To view a catalogue of my skills, visit{" "}
            <Link
              className="text-indigo-700 font-bold hover:underline"
              href={"/Skills"}
            >
              Skills
            </Link>
          </p>
          <p className="text-xl">
            To view my contact information, visit{" "}
            <Link
              className="text-indigo-700 font-bold hover:underline"
              href={"/Contact"}
            >
              Contact
            </Link>
          </p>
        </div>
      </section>
      {/*Third Section */}
      <section className="w-full h-screen snap-center flex justify-center items-center space-x-48">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl">About this Website</h1>
          <p className="text-xl">
            This Website was built using{" "}
            <span className="font-bold text-indigo-700">NextJS</span>
          </p>
          <p className="text-xl">
            Components were developed in{" "}
            <span className="font-bold text-indigo-700">ReactJS</span>
          </p>
          <p className="text-xl">
            Custom animations were devloped in{" "}
            <span className="font-bold text-indigo-700">CSS</span>
          </p>
          <p className="text-xl ">
            The source code is avaliable on my{" "}
            <Link
              className="text-indigo-700 font-bold hover:underline"
              href={"https://github.com/JacobFlasko"}
            >
              Github
            </Link>
          </p>
          <p className="text-xl">Thanks for Visiting!</p>
        </div>{" "}
        <Image
          src={"/Home/programmer_room.svg"}
          alt={"Programmer At Work"}
          width={750}
          height={750}
        />
      </section>
      <Footer />
    </div>
  );
};

export default page;
