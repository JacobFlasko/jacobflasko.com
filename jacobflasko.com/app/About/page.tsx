import React from "react";
import Navbar from "../components/global/Navbar/Navbar";
import Footer from "../components/global/Footer/Footer";
import Image from "next/image";

// Metadata and Title
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full flex justify-center items-center flex-col space-y-8 px-4">
        <section className="w-full max-w-screen-lg flex flex-col justify-center items-center space-y-8">
          <div className="text-4xl font-bold">2004</div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full">
            <Image
              src={"/About/2004.png"}
              alt={""}
              width={200}
              height={200}
              className="px-5"
            />
            <div className="text-lg lg:text-xl leading-relaxed">
              The year 2004 was a year quite unlike any other. NASA successfully
              launched a rover to Mars. The Summer Olympics were being held in
              their original birthplace of Athens, Greece. A world-changing
              application was launched that would forever change not only
              technology but the way people interact. And, one of the greatest
              films ever created, Shrek, was released in theaters. But most
              importantly of all the events and accomplishments of this year,{" "}
              <span className="font-bold">I was born</span>.
            </div>
          </div>

          {/* Second Section */}
          <div className="text-4xl font-bold">2022</div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full">
            <div className="text-lg lg:text-xl leading-relaxed lg:order-2">
              2022 was a special year in my life. I graduated high school and
              began to study at Pittsburgh Technical College. I had taken a
              programming class in high school and recognized that Programming
              was a gateway to infinite possibilities and excellent jobs. As I
              began at PTC, I met other students with similar mindsets and
              ambitions to my own. And as I began school, I was learning and
              enjoying programming more every day.
            </div>
            <Image
              src={"/About/2022.png"}
              alt={""}
              width={200}
              height={200}
              className="px-5"
            />
          </div>
        </section>

        <hr className="w-full border-t border-gray-500 lg:hidden" />

        {/* Third Section */}
        <section className="w-full max-w-screen-lg flex flex-col justify-center items-center space-y-8">
          <div className="text-4xl font-bold">2023</div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full">
            <Image
              src={"/About/2023.png"}
              alt={""}
              width={200}
              height={200}
              className="px-5"
            />
            <div className="text-lg lg:text-xl leading-relaxed">
              I believe that 2023 was a year in my life like no other. I learned
              more this year than any before it. I learned not only about
              programming and technology, but about values and the necessity of
              maintaining a strong set of morals. Beyond education, I
              experienced a variety of events where I learned about the various
              opportunities for programmers and how to communicate to grow my
              professional network. As the year came to an end, I started to
              consider looking outward to find new opportunities to grow.
            </div>
          </div>

          {/* Fourth Section */}
          <div className="text-4xl font-bold">2024</div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full pb-8">
            <div className="text-lg lg:text-xl leading-relaxed lg:order-2">
              2024 has been an interesting year so far. As I finish my
              associates degree in Software Development, I am beginning to look
              for new opportunities to learn and grow. I believe experience is
              the best teacher and because of this, I am currently in search of
              my first job. Although I intend to continue to study in the
              future, right now my most immediate priority is to gain work
              experience. With my educational experience in various
              technologies, combined with my eagerness to learn, I believe I am
              capable of fulfilling various roles.
            </div>
            <Image
              src={"/About/2024.png"}
              alt={""}
              width={200}
              height={200}
              className="px-5"
            />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default page;
