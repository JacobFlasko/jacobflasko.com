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
          <SkillCard
            iconSrc={"/Skills/java_icon.png"}
            text={
              "Java was the first programming language I studied in school. It was fundamental in teaching me software development and it still holds a special place in my heart."
            }
          />
          <SkillCard
            iconSrc={"/Skills/python-logo-only.png"}
            text={
              'Python served as my introduction to programming, the first line of code I ever wrote was "Hello World." I still practice and utilize python regularly.'
            }
          />
          <SkillCard
            iconSrc={"/Skills/Csharp_Logo.png"}
            text={
              "If I have to, I will. That is my outlook on writing C#. Although it is very similar to java, the errors I am thrown look nothing like Java. Still, I recognize that C# is a very powerful language and it boasts many opportunities."
            }
          />
          <SkillCard
            iconSrc={"/Skills/javascriptIcon.png"}
            text={
              "I would consider Javascript and its derivitives to be my preferred programming language(s). On a day to day basis I believe that Javascript is my most used programming language."
            }
          />
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
