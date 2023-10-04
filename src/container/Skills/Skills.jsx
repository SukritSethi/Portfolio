import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import { AppWrap } from '../../wrapper';
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
// import 'react-tooltip/dist/react-tooltip.css'
// const skills = [
//   { name: "Web Devlopment", brColor: "red", icon: images.about01 },

// ];

const Skills = () => {
  const [experiences, setExperiences] = useState([
    {
      year: "June 2022 - Nov 2022",
      works: [
        {
          name: "Software Developer Associate",
          company: "Ikarus 3D",
          desc: `Designed and developed the first MVP iteration of the organization’s new venture, ”Ikarus Nest”. Worked in Figma,
    ReactJs and Django.Handled the containerization and deployment of the MVP. Used Docker and Amazon Web Services.Developed custom web-components to be integrated in Nest. Worked in ReactJs and Typescript`,
        },
      ],
    },
    {
      year: "September 2021 - Current",
      works: [
        {
          name: "Logistics Secretary",
          company: "OWASP Student Chapter",
          desc: `Helped organize HackOwasp4.0, an MLH partner hackathon. Contributed to society’s open source projects. Conducted workshops to teach juniors about tools such as Git and GitHub`,
        },
      ],
    },
  ]);
  const [skills, setSkills] = useState([
    { name: "ReactJS", brColor: "", icon: images.react },
    { name: "UI/UX", brColor: "", icon: images.figma },
    { name: "Git", brColor: "", icon: images.git },
    { name: "NodeJS", brColor: "", icon: images.node },
    { name: "Django", brColor: "#103E2E", icon: images.django },
    { name: "SASS", brColor: "", icon: images.sass },
    { name: "Firebase", brColor: "#1B3A57", icon: images.firebase },
    { name: "C++", brColor: "", icon: images.cpp },
    { name: "Python", brColor: "", icon: images.python },
    { name: "Tailwind", brColor: "", icon: images.tailwind },
    { name: "Javascript", brColor: "", icon: images.javascript },
    { name: "Firebase", brColor: "", icon: images.firebase },
  ]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.brColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text" id="p-text-company-name">
                        {work.company}
                      </p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
