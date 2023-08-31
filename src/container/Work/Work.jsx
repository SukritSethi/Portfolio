import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap} from '../../wrapper';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';

// const filterWork = [
//   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
  
//   { title: "Web Devlopment", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['React JS','All'] },
  
// ];
// const works = [
//   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web3', 'All'] },
  
//   { title: "Web Devlopment", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['React JS','All'] },
  
// ];

const Work = () => {
  const [works, setWorks] = useState([
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web3', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['AI/CV', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about04 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'UI/UX', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about03 ,codeLink:'www.github.com', tags:['Game Dev', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  
  ]);
  const [filterWork, setFilterWork] = useState([
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web3', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['AI/CV', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about04 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'UI/UX', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about03 ,codeLink:'www.github.com', tags:['Game Dev', 'All'] },
    { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  
  ]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section(This section is not yet completed D: )</h2>

      <div className="app__work-filter">
        {['Web Dev', 'UI/UX', 'AI/CV', 'Web3', 'Game Dev', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

// export default AppWrap(
//   MotionWrap(Work, 'app__works'),
//   'work',
//   'app__primarybg',
// );
export default AppWrap(Work, 'work');
