import React from "react";
import AboutSection from "../components/AboutSection";
import TechnologiesSection from "../components/TechnologiesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import SoftSkills from "../components/SoftSkills";

const AboutMe = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <TechnologiesSection />
      <SoftSkills />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
