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
            iconSrc={"/Skills/mysql_logo.svg"}
            text={
              "Of the many Database Management Systems in the market, I have found MySQL to be the most agreeable and useable of them all. I used to have difficulty with databases, but the dolphin helped me overcome my fear."
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
          <SkillCard
            iconSrc={"/Skills/html5_icon.png"}
            text={
              "Although HTML is not a programming language, HTML and the tools derived from it remain some of my favorite to work with in building websites and apps."
            }
          />
          <SkillCard
            iconSrc={"/Skills/flask.svg"}
            text={
              "Flask is great, not because it is a highly-capable microframework with extensive customization and capabilities written in an easy-to-use language. But because it sounds like my last name."
            }
          />
          <SkillCard
            iconSrc={"/Skills/github-mark.png"}
            text={
              "Github is the light at the end of the tunnel, the warm bed to return to at the end of the long day. The cloud repository that prevents me from losing days and weeks of work. I love github."
            }
          />
          <SkillCard
            iconSrc={"/Skills/react_icon.png"}
            text={
              "I rarely say anything good about facebook, however if one good thing has come out of Facebook, it is React. Of all the Javascript Frameworks, React Is my #1."
            }
          />
        </div>
        <div className="flex flex-wrap justify-around w-full pt-10 pb-10">
          <SkillCard
            iconSrc={"/Skills/tailwindcss_logo.svg"}
            text={
              "Although writing thousands of lines of CSS is great, I personally prefer to use a CSS Library such as Tailwind. Thanks to Libraries like Tailwind, I can quickly create quality and responsive layouts."
            }
          />
          <SkillCard
            iconSrc={"/Skills/icons8-watermelon-100.png"}
            text={
              "Selenium. That is what this card represents. But since the Selenium logo is terrible, here is a melon slice. When I first began programming, a topic that greatly interested me was automation, and selenuim does just that."
            }
          />
          <SkillCard
            iconSrc={"/Skills/next-js.svg"}
            text={
              "While React is my Favorite Javascript Framework, Next is my Favorite React Framework. Where React falls short, Next leaps high, I guess 🤷."
            }
          />
          <SkillCard
            iconSrc={"/Skills/Csharp_Logo.png"}
            text={
              "If I have to, I will. That is my outlook on writing C#. Although it is very similar to java, the errors I am thrown look nothing like Java. Still, I recognize that C# is a very powerful language and it boasts many opportunities."
            }
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
