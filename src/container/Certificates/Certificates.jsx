import React from "react";
import "./Certificates.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Certificates = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="certificates">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Link to="/   ">
            <img src={images.logo} alt="logo" />
          </Link>
        </div>
      </nav>
      <div className="certificates__heading">Certificates</div>
      <div className="certificate_list">
        {/* BCG */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="certificate__header-badge">
            <div className="badge-cmp app__flex">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1ik6LQ-4b61N_RhIW5l3Dm_94SnBoOKFn/view?usp=sharing"
              >
                <div>
                  <p className="p-text">Boston Consulting Group</p>
                  <h3 className="head-text">
                    Introduction to Strategy Consulting Job Simulation
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* capd */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="certificate__header-badge">
            <div className="badge-cmp app__flex">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1CyTNypKsHzwJakt8SkB1xmILvdYhINpd/view?usp=sharing"
              >
                <div>
                  <p className="p-text">JP Morgan & Chase</p>
                  <h3 className="head-text">
                    Corporate Analyst Development Program (CADP) Job Simulation{" "}
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* deloitte */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="certificate__header-badge">
            <div className="badge-cmp app__flex">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1S09102YJyiTQz3YniKOlozYgre8PNV2Y/view?usp=sharing"
              >
                <div>
                  <p className="p-text">Deloitte</p>
                  <h3 className="head-text">Technology Job Simulation </h3>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* excel */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="certificate__header-badge">
            <div className="badge-cmp app__flex">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Bo33L9nddbPqpWFPGWSlEhFNaioNdudU/view?usp=sharing"
              >
                <div>
                  <p className="p-text">JP Morgan & Chase</p>
                  <h3 className="head-text">
                    Excel Skills Virtual Experience Program{" "}
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* sap */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="certificate__header-badge">
            <div className="badge-cmp app__flex">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1zu3pr6WPhIl1HBgOdoaC243Y2U9844k9/view?usp=sharing"
              >
                <div>
                  <p className="p-text">SAP</p>
                  <h3 className="head-text">
                    Technical Consulting Job Simulation{" "}
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
