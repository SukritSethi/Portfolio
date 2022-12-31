import React from "react";
import img from "./assets/media/logo.png";
import sukrit from "./assets/media/Group1.png"

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

import webdev from "./assets/media/WebDeveloper.png";
import compcode from "./assets/media/CompetitiveCoder.png";
import designer from "./assets/media/UXDesigner.png";

const App = () => {
  return (
    <>
    <div className="absolute w-full">
      <div className="flex h-16 justify-between sticky top-0 z-10 bg-grey-main">
        <img src={img} alt="" />
        <div className="flex ">
          <div className="mx-5 mt-5">
            <span className="text-peach-main cursor-pointer hover:underline">
              about me
            </span>
          </div>
          <div className="mx-5 mt-5">
            <span className=" text-peach-main cursor-pointer hover:underline">
              skills
            </span>
          </div>
          <div className="mx-5 mt-5">
            <span className=" text-peach-main cursor-pointer hover:underline">
              projects
            </span>
          </div>
          <div className="mx-5 mt-5">
            <span className=" text-peach-main cursor-pointer hover:underline">
              experience
            </span>
          </div>
          <div className="mx-5 mr-14 mt-5">
            <span className=" text-rose-main cursor-pointer hover:underline">
              contact me
            </span>
          </div>
        </div>
      </div>

      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Experience/>
      <ContactMe/>
</div>
      <img src={sukrit} className="absolute h-98 top-28 right-0 cursor-pointer hover:scale-110 transition ease-in-out duration-300" alt="" />
      <img src={webdev} className="absolute -right-8 top-98" alt="" />
      <img src={compcode} className="absolute -left-8 top-192" alt="" />
      <img src={designer} className="absolute -right-8 top-288 mb-10" alt="" />
    </>
  );
};

export default App;
