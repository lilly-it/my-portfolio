import React from "react";
import myPhoto from "../img/my-photo.jpg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { useHistory } from "react-router-dom";

const AboutSection = () => {
  const history = useHistory();

  const goToContact = () => {
    history.push("/contact");
  };

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi, I am Lilly</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Web Developer</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>and Designer.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Interesting in working together? Let's have a talk.
        </motion.p>
        <motion.button variants={fade} onClick={() => goToContact()}>
          Contact me
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={myPhoto} alt="my photo" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
