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
            width={150}
            height={150}
            alt="Javascript Icon"
            className={`shadow-2xl shadow-yellow-300 -rotate-12 ${styles.bump}`}
          />
          <Image
            src="/Home/git_icon.png"
            width={175}
            height={175}
            alt="Git Icon"
            className={`drop-shadow-[0_35px_35px_rgba(248,19,12,1)]  ${styles.bump_delay}`}
          />
          <span
            className={`drop-shadow-[0_45px_45px_rgba(35,124,255,0.65)] rotate-12 shadow-blue-300  ${styles.bump}`}
          >
            <Image
              src="/Home/react_icon.png"
              width={150}
              height={150}
              alt="React Icon"
            />
          </span>
        </div>
        <HeroText />
        <div className="flex space-x-16 md:space-x-32 lg:space-x-48 xl:space-x-72">
          <Image
            src="/Home/java_icon.png"
            width={150}
            height={150}
            alt="Java Icon"
            className={`drop-shadow-[0_45px_45px_rgba(35,124,255,0.65)]  rotate-12 ${styles.bump_delay}`}
          />
          <Image
            src="/Home/python-logo-only.png"
            width={150}
            height={150}
            alt="Python Icon"
            className={`drop-shadow-[0_45px_45px_rgba(255,249,75,0.65)]  ${styles.bump}`}
          />
          <Image
            src="/Home/html5_icon.png"
            width={150}
            height={150}
            alt="HTML 5 Icon"
            className={`drop-shadow-[0_45px_45px_rgba(255,64,64,0.65)] -rotate-12 ${styles.bump_delay}`}
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
          <h1 className="text-5xl">Hi, I'm Jacob</h1>
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
      <section className="w-full h-screen snap-center flex flex-col-reverse justify-center items-center space-y-8 md:flex-row md:space-x-48">
        <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:text-left md:space-y-4">
          <h1 className="text-3xl md:text-5xl">About this Website</h1>
          <p className="text-sm md:text-xl">
            This Website was built using{" "}
            <span className="font-bold text-indigo-700">NextJS</span>
          </p>
          <p className="text-sm md:text-xl">
            Components were developed in{" "}
            <span className="font-bold text-indigo-700">ReactJS</span>
          </p>
          <p className="text-sm md:text-xl">
            Custom animations were developed in{" "}
            <span className="font-bold text-indigo-700">CSS</span>
          </p>
          <p className="text-sm md:text-xl">
            The source code is available on my{" "}
            <a
              className="text-indigo-700 font-bold hover:underline"
              href={"https://github.com/JacobFlasko"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
          <p className="text-sm md:text-xl">Thanks for Visiting!</p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"Home/web_design_icon.svg"}
            alt={"Website Tech Icon"}
            width={500}
            height={500}
            className="pb-10 w-3/4 h-auto md:w-3/4 md:h-auto lg:w-full lg:h-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
