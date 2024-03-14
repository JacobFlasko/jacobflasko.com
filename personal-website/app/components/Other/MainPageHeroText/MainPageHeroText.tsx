// Add "use client" at the top of the file to mark this as a Client Component
"use client";

import React, { useEffect, useState } from "react";

const rotatingTerms = ["incredible", "memorable", "eye-catching"];

const MainPageHeroText: React.FC = () => {
  const [currentTerm, setCurrentTerm] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTerm((currentTerm) => (currentTerm + 1) % rotatingTerms.length);
    }, 2000); // Change the text every 2000 milliseconds (2 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="text-center">
      <p>
        Let's create something{" "}
        <span className="text-primary">{rotatingTerms[currentTerm]}</span>
      </p>
    </div>
  );
};

export default MainPageHeroText;
