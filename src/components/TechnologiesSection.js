import React from "react";
import react from "../img/react.svg";
import redux from "../img/redux.svg";
import es6 from "../img/es6.svg";
import javascript from "../img/javascript.svg";
import tailwind from "../img/tailwindcss-icon.svg";
import git from "../img/git-icon.svg";
import nextjs from "../img/nextjs.svg";
import sass from "../img/sass.svg";
import html from "../img/html.svg";
import styledComponents from "../img/styled-components.png";
import home2 from "../img/8678.jpg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const technologies1 = [
  { name: "Javascript", img: javascript },
  { name: "ES6", img: es6 },
  { name: "React", img: react },
  { name: "Redux", img: redux },
  { name: "Styled Components", img: styledComponents },
];

const technologies2 = [
  { name: "HTML5", img: html },
  { name: "SASS", img: sass },
  { name: "TailwindCSS", img: tailwind },
  { name: "NextJS", img: nextjs },
  { name: "Git", img: git },
];

const TechnologiesSection = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <h2>
            My <span>stack</span> technologies
          </h2>
          <Cards>
            <div className="wrapper">
              {technologies1.map((technology) => (
                <Card>
                  <div className="icon">
                    <img alt="icon" src={technology.img} />
                    <h3>{technology.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
            <div className="wrapper">
              {technologies2.map((technology) => (
                <Card>
                  <div className="icon">
                    <img alt="icon" src={technology.img} />
                    <h3>{technology.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </Cards>
        </Description>
        <Image>
          <img alt="working desk" src={home2} />
        </Image>
      </Services>
    </>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 7rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  .wrapper {
    display: flex;
  }
`;
const Card = styled.div`
  margin-bottom: 6rem;
  img {
    height: 5rem;
  }
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    margin-right: 4rem;
    h3 {
      display: block;
      text-align: center;
      margin-top: 1rem;
      max-width: 10rem;
    }
  }
`;

export default TechnologiesSection;
