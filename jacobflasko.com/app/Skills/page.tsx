import React from "react";
import Navbar from "../components/global/Navbar/Navbar";

//Metadata and Title
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

const page = () => {
  return <Navbar />;
};

export default page;
