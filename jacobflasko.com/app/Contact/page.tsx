import React from "react";
import Navbar from "../components/global/Navbar/Navbar";
import Footer from "../components/global/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm/ContactForm";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full h-screen flex items-center justify-center">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default page;
