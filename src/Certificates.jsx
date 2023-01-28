import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <>
      <div className="mt-10 text-center text-pink-main text-2xl underline">
        Certifications
      </div>
      <Link to="/">
      <div className="mt-10 text-center  text-rose-main text-2xl hover:underline hover:cursor-pointer transition ease-in-out hover:scale-110 duration-300 absolute top-2 flex left-4">
      <AiOutlineArrowLeft/> <p className="-translate-y-1"> Portfolio</p>
      </div></Link>

      <div className="my-2 flex flex-col justify-center text-peach-main mt-12">
        <div className="hover:cursor-pointer flex justify-center my-1"><a href="http://ude.my/UC-775e996f-8c01-4f9d-9223-9d4def3cfad7"><p className="hover:text-pink-main hover:underline px-5">  Data Structures and Algorithms using C++</p></a></div>
        <div className="hover:cursor-pointer flex justify-center my-1"><a href="https://jovian.ai/certificate/MFQTIMZXGI"><p className="hover:text-pink-main hover:underline px-5">  Deep Learning with PyTorch</p></a></div>
        <div className="hover:cursor-pointer flex justify-center my-1"><a href="https://www.udemy.com/certificate/UC-9c0ed9cf-1648-4334-a0e3-2659f2c355f0/"><p className="hover:text-pink-main hover:underline px-5">  Unity Game Development using C#</p></a></div>
        <div className="hover:cursor-not-allowed flex justify-center my-1"><p className="hover:text-pink-main hover:underline px-5">  Three.js Frontend</p></div>
      </div>
        
    </>
  );
};

export default Certificates;
