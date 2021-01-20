import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popUp } from '../animations';

const Game = ({ name, released, image, id, pathId }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`image ${pathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt="image"
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
