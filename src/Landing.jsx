import React, { useEffect } from "react";
import img from "./assets/media/logo.png";
import sukrit from "./assets/media/Group1.png";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

import webdev from "./assets/media/WebDeveloper.png";
import compcode from "./assets/media/CompetitiveCoder.png";
import designer from "./assets/media/UXDesigner.png";

import Modal from "react-modal";

const Landing = () => {
  useEffect(() => {
    console.clear();
    console.log("Let's connect");
    console.log("sukritsethi18@gmail.com");
  }, []);
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "0px solid white",
            backgroundColor: "#00000000",
          },
          overlay: {
            backgroundColor: "#57596277",
          },
        }}
      >
        <div className="bg-grey-main-transluscent p-12 rounded-xl border drop-shadow-xl border-pink-main text-peach-main">
          <h1 className="text-green-main flex justify-center text-3xl mb-4">Announcement</h1>
          The current website is still in live development TwT <br /><br /> 
          Don't bully me :p <br />
          <div className="flex justify-center">
            <button
              onClick={closeModal}
              className="mx-auto py-1 mt-5 px-3 hover:outline hover:outline-1 rounded-xl hover:bg-grey-main-transluscent"
            >
              close modal
            </button>
          </div>
        </div>
      </Modal>
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

        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <ContactMe />
        <div className="absolute left-0 bottom-0 bg-light-main opacity-10  h-97 w-7/12 border-white chhotaindex"></div>
      </div>
      <img
        src={sukrit}
        className="absolute h-98 top-28 right-0 cursor-pointer hover:scale-110 transition ease-in-out duration-300"
        alt=""
      />
      <img src={webdev} className="absolute -right-8 top-98" alt="" />
      <img src={compcode} className="absolute -left-8 top-192" alt="" />
      <img src={designer} className="absolute -right-8 top-288 mb-10" alt="" />
    </>
  );
};

export default Landing
