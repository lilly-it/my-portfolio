import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, photoAnim } from "../animation";
import styled from "styled-components";
import contact from "../img/contact.jpg";
import { Image, Hide } from "../styles";
import linkedIn from "../img/linkedin-icon.svg";
import github from "../img/github-icon.svg";
import email from "../img/email.svg";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="wrapper">
        <Title>
          <Hide>
            <motion.h2 className="title" variants={titleAnim}>
              Get in touch
            </motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <a target="_blank" href="https://github.com/lilly-it">
              <Social variants={titleAnim}>
                <img alt="github" className="social" src={github} />
                <h2>Github</h2>
              </Social>
            </a>
          </Hide>
          <Hide>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lilia-dorofeev/"
            >
              <Social variants={titleAnim}>
                <img alt="icon" className="social" src={linkedIn} />
                <h2>LinkedIn</h2>
              </Social>
            </a>
          </Hide>
          <Hide>
            <a href="mailto:lilia.dorofeev@gmail.com">
              <Social variants={titleAnim}>
                <img alt="email" className="social" src={email} />
                <h2>E-mail</h2>
              </Social>
            </a>
          </Hide>
        </div>
      </div>
      <Image>
        <motion.img
          className="contact"
          variants={photoAnim}
          src={contact}
          alt="contact"
        />
      </Image>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  color: #fff;
  height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      color: #23d997;
      transition: all 0.3s;
    }
  }
  .social {
    height: 5rem;
    width: 5rem;
  }
  .contact {
    object-fit: cover;
    width: 70vw;
  }
  .wrapper {
    margin-right: 20rem;
  }
  .title {
    font-size: 4.5rem;
    color: #23d997;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 3rem;
  }
`;

export default ContactUs;
