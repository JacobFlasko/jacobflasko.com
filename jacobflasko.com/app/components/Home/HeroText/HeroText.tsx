"use client";
import React, { useEffect, useState } from "react";

const rotatingTerms = [
  "Incredible",
  "Innovative",
  "Groundbreaking",
  "World-Changing",
  "Memorable",
];

const HeroText: React.FC = () => {
  const [currentTerm, setCurrentTerm] = useState(0);
  const [isEntering, setIsEntering] = useState(true); // Simplify the state to a boolean for entering/exiting

  useEffect(() => {
    // Set the text to enter on initial render
    setIsEntering(true);

    const intervalId = setInterval(() => {
      // Trigger exit animation
      setIsEntering(false);

      // Change term and restart entering animation after exit animation completes
      setTimeout(() => {
        setCurrentTerm((prevTerm) => (prevTerm + 1) % rotatingTerms.length);
        setIsEntering(true);
      }, 500); // Matches the duration of the exit animation
    }, 2_500); // Total duration before changing the term, including animation time

    return () => clearInterval(intervalId);
  }, []);

  // Define styles for entering and exiting states
  const enteringStyle = {
    opacity: 1,
  };
  const exitingStyle = {
    opacity: 0,
  };

  // Apply different styles based on the entering/exiting state
  const dynamicWordStyle = isEntering ? enteringStyle : exitingStyle;

  return (
    <div className="text-center relative" style={{ height: "24px" }}>
      <p
        style={{
          display: "inline-block",
        }}
        className="text-xl md:text-4xl lg:text-5xl whitespace-nowrap"
      >
        Let's create something{" "}
        <span
          className="text-primary"
          style={{
            ...dynamicWordStyle,
            transition: "opacity 500ms ease",
          }}
        >
          {rotatingTerms[currentTerm]}
        </span>
      </p>
    </div>
  );
};

export default HeroText;
