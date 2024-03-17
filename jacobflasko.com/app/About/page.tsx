import React from "react";
import Navbar from "../components/global/Navbar/Navbar";
import Footer from "../components/global/Footer/Footer";
import Image from "next/image";

//Metadata and Title
import type { Metadata } from "next";
import { GoHorizontalRule } from "react-icons/go";
import { MdHorizontalRule } from "react-icons/md";
import { VscHorizontalRule } from "react-icons/vsc";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full h-auto  flex justify-center items-center flex-col ">
        <section className="w-3/4 flex flex-col justify-center items-center space-y-8 h-screen">
          <div className="text-4xl text-bold  drop-shadow">2004</div>
          <div className="flex justify-around items-center w-full">
            <Image
              src={"/Home/react_icon.png"}
              alt={""}
              width={200}
              height={200}
            ></Image>
            <div className="text-xl leading-10">
              The year 2004 was a year quite unlike any other. NASA successfully
              launched a rover to mars. <br />
              The Summer Olympics were being held in their original birthplace
              of Athens, Greece. A world <br />
              changing application was launched that would forever change not
              only technlolgy, but the way <br />
              people interact. And, one of the greatest films ever was released
              to theatres was created, Shrek. <br />
              But most importantly of all the events and accomplishments of this
              year, <span className="font-bold">I was born</span>.
            </div>
          </div>

          {/*Second Section */}
          <div className="text-4xl text-bold">2022</div>
          <div className="flex justify-around items-center w-full">
            <div className="text-xl leading-10">
              2022 was a special year in my life. I graduated highschool and
              began to study at <br />
              Pittsburgh Technical College. I had taken a programming class in
              High School and recoginized <br />
              that Programming was a gateway to infinite possibilities and
              excellent jobs.
              <br />
              As I began at PTC, I met other students with similar mindsets and
              ambitions to my own,
              <br />
              And as I began school, I was learning and enjoying programming
              more every day.
            </div>
            <Image
              src={"/Home/react_icon.png"}
              alt={""}
              width={200}
              height={200}
            ></Image>
          </div>
        </section>

        <div className="w-4/5 h-1 border-y-2 border-gray-500"></div>
        {/*Third Section */}
        <section className="w-3/4 flex flex-col justify-center items-center space-y-8 h-screen">
          <div className="text-4xl text-bold">2023</div>
          <div className="flex justify-around items-center w-full">
            <Image
              src={"/Home/react_icon.png"}
              alt={""}
              width={200}
              height={200}
            ></Image>
            <div className="text-xl leading-10">
              I believe that 2023 was a year in my life like no other. I learned
              more this year than any before it. <br />I learned not only about
              programming and technology, but about values and neccessity of
              maintating <br />
              a strong set of morales. Beyond eduaction I experienced a variety
              of events where I learned about
              <br />
              the various opportunities for programmers and how to communicate
              to grow my professional network.
              <br />
              As the year came to an end I started to consider looking outward
              to find new opportunities to grow.
            </div>
          </div>
          {/*Fourth Section */}
          <div className="text-4xl text-bold">2024</div>
          <div className="flex justify-around items-center w-full">
            <div className="text-xl leading-10">
              2024 has been an interesting year so far. As I finish my
              associates degree in Software Development, <br /> I am beginning
              to look for new opportuinites to learn and grow. I believe
              experience is the best teacher
              <br />
              and because of this I am currently in search of my first job.
              Although I intend to continue to study in
              <br />
              the future, right now my most immidate priority is to gain work
              experience. With my educational expereince
              <br />
              in various technologies, combined with my eagerness to learn, I
              believe I am capable of fufilling various roles.
            </div>
            <Image
              src={"/Home/react_icon.png"}
              alt={""}
              width={200}
              height={200}
              className="pb-8"
            ></Image>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default page;
