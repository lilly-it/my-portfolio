import React from "react";
import teamwork from "../img/teamwork.svg";
import softSkills from "../img/softskills.jpg";
import communication from "../img/communication.svg";
import adaptability from "../img/adaptability.svg";
import problemSolving from "../img/problem-solving.svg";
import stress from "../img/stress.svg";
import clock from "../img/clock.svg";
import efficiency from "../img/efficiency.svg";
import creativeness from "../img/creativeness.svg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const SoftSkills = () => {
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
            My <span>soft</span> skills
          </h2>
          <Cards>
            <div className="wrapper">
            <Card>
              <div className="icon">
                <img alt="icon" src={clock} />
                <h3>Time management</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={teamwork} />
                <h3>Teamwork</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={communication} />
                <h3>Communication</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={creativeness} />
                <h3>Creativeness</h3>
              </div>
            </Card>
            </div>
            <div className="wrapper">
            <Card>
              <div className="icon">
                <img alt="icon" src={problemSolving} />
                <h3>Problem solving</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={adaptability} />
                <h3>Adaptability</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={stress} />
                <h3>Stress control</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={efficiency} />
                <h3>Efficiency</h3>
              </div>
            </Card>
            </div>
          </Cards>
        </Description>
        <Image>
          <img alt="meeting" src={softSkills} />
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
    font-size: 8px;
  }
`;
const Cards = styled.div`
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  .wrapper {
    display: flex;
  }
`;
const Card = styled.div`
  margin-right: 40px;
  margin-bottom: 70px;
  width: 100px;
  img {
    height: 70px;
  }
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    margin-right: 5rem;
    h3 {
      display: block;
      text-align: center;
      margin-top: 10px;
      width: 120px;
      height: 70px;
      white-space: nowrap;
      text-align: center;
      font-size: 16px;
    }
  }
`;

export default SoftSkills;
