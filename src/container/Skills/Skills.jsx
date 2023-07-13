import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
// import 'react-tooltip/dist/react-tooltip.css'
// const skills = [
//   { name: "Web Devlopment", brColor: "red", icon: images.about01 },
  
// ];

const Skills = () => {
  const [experiences, setExperiences] = useState([
    {year: 'June 2022 - Nov 2022', works: [{name: 'Software Developer Associate', company: 'Ikarus 3D', desc: 'lorem ipsum aerjh ergkj rn wergkjbwerrn wegkjbwembn wegkjbsdmbfvoj wekjwddb vdljbwdmfn wdoiobhsdjhfbwrgj'}]},
    {year: 'September 2021 - Current', works: [{name: 'Logistics Secretary', company: 'OWASP Student Chapter', desc: 'lorem ipsum aerjh ergkj rn wergkjbwerrn wegkjbwembn wegkjbsdmbfvoj wekjwddb vdljbwdmfn wdoiobhsdjhfbwrgj' }]}
  ]);
  const [skills, setSkills] = useState([
    { name: "Web Devlopment", brColor: "red", icon: images.react },
    { name: "Web Devlopment", brColor: "red", icon: images.react },
    { name: "Web Devlopment", brColor: "red", icon: images.react },
    { name: "Web Devlopment", brColor: "red", icon: images.react },
    { name: "Web Devlopment", brColor: "red", icon: images.react },
    
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
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
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
                      <p className="p-text" id="p-text-company-name">{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      <p>{work.desc}</p>
                    </ReactTooltip> */}
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
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);

