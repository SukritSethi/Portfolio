import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";

const abouts = [
  {
    title: "Web Devlopment",
    description:
      "Highly skilled web developer proficient in ReactJS, Sass, Tailwind CSS, Node.js, JavaScript, and Firebase. Adept in making dynamic applications with responsive interfaces, animations, and efficient server-side functionality. Innovative problem-solver trying to deliver exceptional solutions that exceed expectations.",
    imgUrl: images.about__web,
  },
  {
    title: "UI/UX",
    description:
      "As a design ethuisast, I have grown as a UI/UX designer with extensive experience in Figma, trying to craft exceptional user interfaces. I have a keen eye for detail and my user-centric approach helps in designing seamless interactions and engaging designs, making me a valuable asset in delivering captivating digital solutions.",
    imgUrl: images.about__uiux,
  },
  {
    title: "Web3 Devlopment",
    description: "As an aspiring web3 developer, I am currently in the learning phase, exploring Solidity and various web3 protocols. I am excited about creating solutions that connect web2 with web3 technologies. Embracing decentralized applications (dApps) and blockchain, I am dedicated to honing my skills and contributing to the evolving web3 ecosystem.",
    imgUrl: images.about__web3,
  },
  {
    title: "Web3 Devlopment",
    description: "As an aspiring web3 developer, I am currently in the learning phase, exploring Solidity and various web3 protocols. I am excited about creating solutions that connect web2 with web3 technologies. Embracing decentralized applications (dApps) and blockchain, I am dedicated to honing my skills and contributing to the evolving web3 ecosystem. I  strive to have a positive impact in the decentralized technology space.",
    imgUrl: images.about__ds,
  },
  // { title: "Web3 Devlopment", description: "I am good web developer" , imgUrl: images.about03},
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(()=>{
  //   const query =  '*[_type == "abouts"';
  // },[]);

  return (
    <>
      <h2 className="head-text margin__top">
        The <span>Skills</span> I've Gathered So Far
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
          
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
