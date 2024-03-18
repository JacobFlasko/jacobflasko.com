import React from "react";
import Navbar from "../components/global/Navbar/Navbar";
import SkillsHeader from "../components/Skills/Header/SkillsHeader";
import SkillCard from "../components/Skills/Card/SkillCard";
import Footer from "../components/global/Footer/Footer";

// Metadata and Title
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow flex flex-col items-center space-y-2">
        <SkillsHeader />
        <div className="flex flex-wrap justify-around w-full pt-10">
          <SkillCard iconSrc={""} text={"Base Text"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
        </div>
        <div className="flex flex-wrap justify-around w-full pt-10">
          <SkillCard iconSrc={""} text={"Base Text"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
        </div>
        <div className="flex flex-wrap justify-around w-full pt-10">
          <SkillCard iconSrc={""} text={"Base Text"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
          <SkillCard iconSrc={""} text={"Hello There"} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
