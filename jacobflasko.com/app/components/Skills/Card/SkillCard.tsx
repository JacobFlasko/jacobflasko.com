import React from "react";
import Image from "next/image";

interface SkillCardProps {
  iconSrc: string;
  text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ iconSrc, text }) => {
  return (
    <div className="skill-card w-80 h-80 lg:w-80 bg-gray-100 shadow-xl hover:scale-110 hover:shadow-xl duration-500 rounded-3xl m-4 flex flex-col items-center justify-center">
      <div className="aspect-w-1 aspect-h-1">
        <Image
          src={iconSrc}
          width={75}
          height={75}
          alt="Skill Icon"
          className="object-cover drop-shadow-xl"
        />
      </div>
      <div className="p-4">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default SkillCard;
