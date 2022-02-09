import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  const go = (link) => {
    window.open(link);
  };
  //github.com/liliaDDD/radio
  https: return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <div style={{ display: "flex" }}>
              <img src={movie.secondaryImg} alt="movie" />
              <Alex>
                <button
                  className="site"
                  onClick={() => go("https://liliaddd.github.io/radio")}
                >
                  Visit Site
                </button>
                <button onClick={() => go("https://github.com/liliaDDD/radio")}>
                  View Code
                </button>
              </Alex>
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
  min-height: 90vh;
  padding-top: 20vh;
  padding-bottom: 10px;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 50%;
    height: 70vh;
    object-fit: contain;
  }
`;
const Alex = styled.div`
  color: white;
  display: inline-block;
  .site {
    margin-right: 1rem;
  }
`;

export default MovieDetail;
