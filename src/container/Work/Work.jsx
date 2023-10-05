import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap} from '../../wrapper';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';
import { Link } from 'react-router-dom';

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
    { title: "Portfolio", description: "ReactJS and SASS based web portfolio made to showcase my skills, projects and experiences",projectLink:'www.sukritsethi.xyz', imgUrl: images.work_Portfolio ,codeLink:'https://github.com/SukritSethi/Portfolio', tags:['Web Dev', 'UI/UX', 'All'] },
    { title: "Video-Call", description: "A full-stack Web Sockets based video-call app made using socket.io in a NodeJS runtime with a basic ReactJS Frontend",projectLink:'https://github.com/SukritSethi/video-call', imgUrl: images.work_Videocall ,codeLink:'https://github.com/SukritSethi/video-call', tags:['Web Dev', 'All'] },
    { title: "Codepen Clone", description: "A simple Frontend application inspired by codepen.io, which allows the users to run their vanilla js projects within the browser itself using an inbuilt code editor",projectLink:'https://dev-in-browser.vercel.app/', imgUrl: images.work_CodePenClone ,codeLink:'https://github.com/SukritSethi/dev-in-browser', tags:['Web Dev', 'UI/UX', 'All'] },
    { title: "H2Bro", description: "A simple chrome extension made to track water intake. Have incorporated chrome local storage",projectLink:'https://github.com/SukritSethi/H2Bro', imgUrl: images.work_H2Bro ,codeLink:'https://github.com/SukritSethi/H2Bro', tags:['Web Dev', 'UI/UX', 'All'] },
    { title: "Weather App", description: "A basic ReactJS based frontend weather webapp made in react, using openweathermap, unsplash and geolocation api",projectLink:'https://weather-app-ruby-six.vercel.app/', imgUrl: images.work_WeatherApp ,codeLink:'https://github.com/SukritSethi/Weather-App', tags:['Web Dev', 'UI/UX', 'All'] }
  ]);
  // const [works, setWorks] = useState([
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web3', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['AI/CV', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about04 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'UI/UX', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about03 ,codeLink:'www.github.com', tags:['Game Dev', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  
  // ]);
  const [filterWork, setFilterWork] = useState([]);
  // const [filterWork, setFilterWork] = useState([
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web3', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['AI/CV', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about04 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about02 ,codeLink:'www.github.com', tags:['UI/UX', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'UI/UX', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about03 ,codeLink:'www.github.com', tags:['Game Dev', 'All'] },
  //   { title: "Web3", description: "I am good web developer",projectLink:'www.youtube.com', imgUrl: images.about01 ,codeLink:'www.github.com', tags:['Web Dev', 'All'] },
  
  // ]);
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
      {/* <h2 className="head-text">My Creative <span>Portfolio</span> Section(this section is incomplete... )</h2> */}
      <h2 className="head-text">My <span>Projects</span> (this section is incomplete... )</h2>

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
                <Link to={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </Link>
                <Link to={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </Link>
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
