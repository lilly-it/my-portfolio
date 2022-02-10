import React, { useState, useEffect } from "react";
import react from "../img/react.svg";
import redux from "../img/redux.svg";
import es6 from "../img/es6.svg";

import tailwind from "../img/tailwindcss-icon.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  const go = (link) => {
    window.open(link);
  };

  console.log(project);

  return (
    <>
      {project && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{project.title}</h2>
            <div className="flex">
              <img src={project.secondaryImg} alt="project" />
              <div>
                <Info>
                  <button
                    className="site button"
                    onClick={() => go("https://lilly-it.github.io/soul-sound")}
                  >
                    Visit Site
                  </button>
                  <button
                    className="button"
                    onClick={() => go("https://github.com/lilly-it/soul-sound")}
                  >
                    View Code
                  </button>
                </Info>
                <div className="text">{project.description}</div>
                <div>
                  <h3 className="title">Technologies used:</h3>
                </div>

                <div className="flex-wrap">
                  {project.technologies.map((technology) => (
                    <Card>
                      <div className="icon">
                        <img alt="icon" src={technology.icon} />
                        <h3>{technology.name}</h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </HeadLine>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: calc(80vh-10px);
  padding-top: 20vh;
  padding-bottom: 10px;
  position: relative;
  .flex {
    display: flex;
  }
  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .text {
    font-size: 1.2rem;
    width: 90%;
    line-height: 1.9;
    padding-bottom: 3rem;
    white-space: pre-wrap;
  }
  .title {
    font-size: 1.4rem;
    padding-bottom: 1rem;
  }
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 50%;
    height: 65vh;
    object-fit: contain;
    padding: 0rem 3rem;
  }
`;
const Info = styled.div`
  display: inline-block;
  padding-bottom: 2rem;
  color: white;
  .site {
    margin-right: 1rem;
  }
  .button {
    width: 11rem;
  }
`;
const Card = styled.div`
  img {
    height: 70px;
    width: 130px;
  }
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      display: block;
      text-align: center;
      font-size: 1rem;
    }
  }
`;

export default ProjectDetail;
