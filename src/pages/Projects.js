import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gamefinder from "../img/gamefinder.png";
import soulSound from "../img/soul-sound.png";
import devBlogs from "../img/devblogs.png";
import myPortfolio from "../img/my-portfolio.png";
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const Projects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Project>
        <motion.h2 variants={fade}>Soul Sound</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/soul-sound">
          <motion.img
            className="image"
            variants={photoAnim}
            src={soulSound}
            alt="Soul Sound"
          />
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Gamefinder</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/gamefinder">
          <img variants={photoAnim} src={gamefinder} alt="gamefinder" />
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>DevBlogs</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/devblogs">
          <img src={devBlogs} alt="devBlogs" />
        </Link>
      </Project>
      <Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>My Portfolio</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/my-portfolio">
          <img src={myPortfolio} alt="myPortfolio" />
        </Link>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img,
  .image {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: top;
    transition: all 0.4s;
    opacity: 1;
    box-shadow: 10px 11px 42px -5px rgba(0, 0, 0, 0.5);
    &:hover {
      opacity: 0.95;
      transition: all 0.4s;
      box-shadow: 5px 6px 27px -2px rgba(0, 0, 0, 0.5);
    }
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
