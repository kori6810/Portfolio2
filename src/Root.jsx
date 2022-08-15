import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/About/About";
import { Projects } from "./components/projects/Projects";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/contact/contact";
import Footer from "./components/bottom/Footer";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
