import React from "react";
import Navbar from "../components/global/Navbar/Navbar";
import Footer from "../components/global/Footer/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full h-auto bg-gray-50 flex justify-center items-center flex-col space-y-8">
        <div className="text-4xl text-bold pt-8 drop-shadow">2004</div>
        <div className="flex justify-around items-center w-full">
          <Image
            src={"/Home/react_icon.png"}
            alt={""}
            width={200}
            height={200}
          ></Image>
          <div className="text-xl">
            2004 was an incredible year for humanity. Facebook was released,
            Nasa Landed a Rover on Mars, The Olympics are <br />
            being held in their bith place Athens, Greece. But above all else,
            the most important occurance of 2004 was my birthday. <br />
            This would mark the beginning of new era for mankind. I was born in
            Pittsburgh Pennsylvania, where I reside to this day. <br />
          </div>
        </div>
        {/*Second Section */}
        <div className="text-4xl text-bold">2022</div>
        <div className="flex justify-around items-center w-full">
          <div className="text-xl">
            2004 was an incredible year for humanity. Facebook was released,
            Nasa Landed a Rover on Mars, The Olympics are <br />
            being held in their bith place Athens, Greece. But above all else,
            the most important occurance of 2004 was my birthday. <br />
            This would mark the beginning of new era for mankind. I was born in
            Pittsburgh Pennsylvania, where I reside to this day. <br />
          </div>
          <Image
            src={"/Home/react_icon.png"}
            alt={""}
            width={200}
            height={200}
          ></Image>
        </div>
        {/*Second Section */}
        <div className="text-4xl text-bold">2023</div>
        <div className="flex justify-around items-center w-full">
          <Image
            src={"/Home/react_icon.png"}
            alt={""}
            width={200}
            height={200}
          ></Image>
          <div className="text-xl">
            2004 was an incredible year for humanity. Facebook was released,
            Nasa Landed a Rover on Mars, The Olympics are <br />
            being held in their bith place Athens, Greece. But above all else,
            the most important occurance of 2004 was my birthday. <br />
            This would mark the beginning of new era for mankind. I was born in
            Pittsburgh Pennsylvania, where I reside to this day. <br />
          </div>
        </div>

        {/*Second Section */}
        <div className="text-4xl text-bold">2024</div>
        <div className="flex justify-around items-center w-full">
          <div className="text-xl">
            2004 was an incredible year for humanity. Facebook was released,
            Nasa Landed a Rover on Mars, The Olympics are <br />
            being held in their bith place Athens, Greece. But above all else,
            the most important occurance of 2004 was my birthday. <br />
            This would mark the beginning of new era for mankind. I was born in
            Pittsburgh Pennsylvania, where I reside to this day. <br />
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
      <Footer />
    </div>
  );
};

export default page;
