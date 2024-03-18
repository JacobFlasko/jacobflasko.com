import React from "react";

interface HeaderProps {
  headerText: string;
}

const SkillsHeader = () => {
  return (
    <div className="text-lg md:text-3xl lg:text-4xl font-bold ">
      Programming Skills
    </div>
  );
};

export default SkillsHeader;
