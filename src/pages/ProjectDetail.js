import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    console.log(currentProject);
    setProject(currentProject[0]);
  }, [projects, url]);

  const go = (link) => {
    window.open(link);
  };

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
              <img
                src={project.secondaryImg}
                className="preview"
                alt="project"
              />
              <div>
                <Info>
                  <button
                    className="site button"
                    onClick={() => go(project.site)}
                  >
                    Visit Site
                  </button>
                  <button className="button" onClick={() => go(project.code)}>
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
  min-height: 80vh;
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
  .preview {
    object-fit: cover;
    object-position: left;
    width: 50vw;
    height: 70vh;
    margin: 0rem 2.5rem;
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
    height: 3rem;
    width: 3rem;
  }
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 4rem;
    margin-right: 2rem;
    h3 {
      display: block;
      text-align: center;
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`;

export default ProjectDetail;
