import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-2/3 h-4/5 bg-gray-50 flex flex-col space-y-12 shadow-xl rounded-lg justify-center items-center">
      <div>
        <h1 className="font-bold text-md lg:text-3xl">Contact Me!</h1>
      </div>
      <span className="flex flex-col items-center space-y-4">
        <div className="text-sm lg:text-2xl font-bold">Primary Email 📤</div>
        <div className="text-sm lg:text-2xl">jrf21@students.ptcollege.edu</div>
      </span>
      <span className="flex flex-col items-center space-y-4">
        <div className="text-sm lg:text-2xl font-bold">Secondary Email 📨</div>
        <div className="text-sm lg:text-2xl">jacobflasko22@gmail.com</div>
      </span>
      <span className="flex flex-col items-center space-y-4">
        <div className="text-sm lg:text-2xl font-bold">Linkedin 🤮</div>
        <Link
          href="https://www.linkedin.com/in/jacob-flasko-a52a3a244/"
          className="text-sm lg:text-2xl text-indigo-700 font-bold"
        >
          LinkedIn/JacobFlasko
        </Link>
      </span>
    </div>
  );
};

export default ContactForm;
