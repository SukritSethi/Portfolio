import React, { useState } from "react";
import ritman from "../assets/media/ritman-ui.png";
import { motion } from "framer-motion";

const Projects = () => {
  const [isProject1, setIsProject1] = useState(false);
  const [isProject2, setIsProject2] = useState(false);
  const [isProject3, setIsProject3] = useState(false);
  const [isProject4, setIsProject4] = useState(false);

  return (
    <div className="px-24">
      <div className="flex text-3xl mb-10 text-pink-main justify-end">
        Some of the projects I've worked on
      </div>
      <div className=" flex flex-wrap mx-2">
        <div className="basis-1/2">
          <div
            className="m-5 p-10 pt-5 rounded-3xl h-98 cursor-alias bg-light-main-two bg-opacity-10  hover:shadow-lg hover:shadow-rose-main"
            onMouseEnter={() => {
              setIsProject1(true);
              console.log("true");
            }}
            onMouseLeave={() => {
              setIsProject1(false);
              console.log("false");
            }}
          >
            <motion.img
              src={ritman}
              alt=""
              animate={{ opacity: isProject1 ? 0.1 : 1 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: isProject1 ? -300 : 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              whileInView={{ opacity: 1 }}
              className="text-4xl text-green-main mt-4"
            >
              <div className="flex justify-center">Rit-man</div>
              <div className="flex justify-center text-lg">
                {" "}
                a design centric web-development agency
              </div>
            </motion.div>

            <motion.div
              className="text-2xl text-peach-main flex justify-center"
              animate={{ y: isProject1 ? -30 : 0, opacity: isProject1 ? 1 : 0 }}
            >
              Co - founder
            </motion.div>
            <motion.div
              className="flex justify-center text-rose-main text-center "
              animate={{ y: -300 ,
            opacity: isProject1? 1:0}}
            >
              ideated the project. developed the website for the agency.
              delivered designs and ideations to clients.developed website
              solutions according to client requests.
            </motion.div>
          </div>
        </div>
        <div className="basis-1/2">
          <div
            className="m-5 p-10 pt-5 rounded-3xl h-98 cursor-alias bg-light-main-two bg-opacity-10  hover:shadow-lg hover:shadow-rose-main"
            onMouseEnter={() => {
              setIsProject2(true);
              console.log("true");
            }}
            onMouseLeave={() => {
              setIsProject2(false);
              console.log("false");
            }}
          >
            <motion.img
              src={ritman}
              alt=""
              animate={{ opacity: isProject2? 0.1 : 1 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: isProject2 ? -300 : 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              whileInView={{ opacity: 1 }}
              className="text-4xl text-green-main mt-4"
            >
              <div className="flex justify-center">Rit-man</div>
              <div className="flex justify-center text-lg">
                {" "}
                a design centric web-development agency
              </div>
            </motion.div>

            <motion.div
              className="text-2xl text-peach-main flex justify-center"
              animate={{ y: isProject2 ? -30 : 0, opacity: isProject2 ? 1 : 0 }}
            >
              Co - founder
            </motion.div>
            <motion.div
              className="flex justify-center text-rose-main text-center "
              animate={{ y: -300 ,
            opacity: isProject2? 1:0}}
            >
              ideated the project. developed the website for the agency.
              delivered designs and ideations to clients.developed website
              solutions according to client requests.
            </motion.div>
          </div>
        </div>
        <div className="basis-1/2">
          <div
            className="m-5 p-10 pt-5 rounded-3xl h-98 cursor-alias bg-light-main-two bg-opacity-10  hover:shadow-lg hover:shadow-rose-main"
            onMouseEnter={() => {
              setIsProject3(true);
              console.log("true");
            }}
            onMouseLeave={() => {
              setIsProject3(false);
              console.log("false");
            }}
          >
            <motion.img
              src={ritman}
              alt=""
              animate={{ opacity: isProject3 ? 0.1 : 1 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: isProject3 ? -300 : 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              whileInView={{ opacity: 1 }}
              className="text-4xl text-green-main mt-4"
            >
              <div className="flex justify-center">Rit-man</div>
              <div className="flex justify-center text-lg">
                {" "}
                a design centric web-development agency
              </div>
            </motion.div>

            <motion.div
              className="text-2xl text-peach-main flex justify-center"
              animate={{ y: isProject3 ? -30 : 0, opacity: isProject3 ? 1 : 0 }}
            >
              Co - founder
            </motion.div>
            <motion.div
              className="flex justify-center text-rose-main text-center "
              animate={{ y: -300 ,
            opacity: isProject3? 1:0}}
            >
              ideated the project. developed the website for the agency.
              delivered designs and ideations to clients.developed website
              solutions according to client requests.
            </motion.div>
          </div>
        </div>
        <div className="basis-1/2">
          <div
            className="m-5 p-10 pt-5 rounded-3xl h-98 cursor-alias bg-light-main-two bg-opacity-10  hover:shadow-lg hover:shadow-rose-main"
            onMouseEnter={() => {
              setIsProject4(true);
              console.log("true");
            }}
            onMouseLeave={() => {
              setIsProject4(false);
              console.log("false");
            }}
          >
            <motion.img
              src={ritman}
              alt=""
              animate={{ opacity: isProject4 ? 0.1 : 1 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: isProject4 ? -300 : 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              whileInView={{ opacity: 1 }}
              className="text-4xl text-green-main mt-4"
            >
              <div className="flex justify-center">Rit-man</div>
              <div className="flex justify-center text-lg">
                {" "}
                a design centric web-development agency
              </div>
            </motion.div>

            <motion.div
              className="text-2xl text-peach-main flex justify-center"
              animate={{ y: isProject4 ? -30 : 0, opacity: isProject4 ? 1 : 0 }}
            >
              Co - founder
            </motion.div>
            <motion.div
              className="flex justify-center text-rose-main text-center "
              animate={{ y: -300 ,
            opacity: isProject4? 1:0}}
            >
              ideated the project. developed the website for the agency.
              delivered designs and ideations to clients.developed website
              solutions according to client requests.
            </motion.div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Projects;
