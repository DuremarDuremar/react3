import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const array = {
  CannesPosterImages: [
    null,
    "assets/logoPoster/Cannes_2010s.jpg",
    null,
    "assets/logoPoster/Cannes_2000s.jpg",
    "assets/logoPoster/Cannes_1990s.jpg",
    "assets/logoPoster/Cannes_1980s.jpg",
    "assets/logoPoster/Cannes_1970s.jpg",
    "assets/logoPoster/Cannes_1960s.jpg",
    "assets/logoPoster/Cannes_1950s.jpg",
    "assets/logoPoster/Cannes_1940s.jpg",
  ],
  VenicePosterImages: [
    null,
    "assets/logoPoster/Venice_2010s.jpg",
    null,
    "assets/logoPoster/Venice_2000s.jpg",
    "assets/logoPoster/Venice_1990s.jpg",
    "assets/logoPoster/Venice_1980s.jpg",
    "assets/logoPoster/Venice_1970s.jpg",
    "assets/logoPoster/Venice_1960s.jpg",
    "assets/logoPoster/Venice_1950s.jpg",
    "assets/logoPoster/Venice_1940s.jpg",
  ],
  BerlinPosterImages: [
    null,
    "assets/logoPoster/Berlin_2010s.jpg",
    null,
    "assets/logoPoster/Berlin_2000s.jpg",
    "assets/logoPoster/Berlin_1990s.jpg",
    "assets/logoPoster/Berlin_1980s.jpg",
    "assets/logoPoster/Berlin_1970s.jpg",
    "assets/logoPoster/Berlin_1960s.jpg",
    "assets/logoPoster/Berlin_1950s.jpg",
    null,
  ],
  SundancePosterImages: [
    null,
    "assets/logoPoster/Sundance_2010s.jpg",
    null,
    "assets/logoPoster/Sundance_2000s.jpg",
    "assets/logoPoster/Sundance_1990s.jpg",
    "assets/logoPoster/Sundance_1980s.jpg",
    null,
    null,
    null,
    null,
  ],
};

const fadeIn = keyframes`
    0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const wrapAnimation = css`
  animation: ${fadeIn} 1s linear infinite;
`;

const YearStyle = styled.div`
  text-align: center;
  font-size: calc(14px + 1vw);
  height: 130px;
  background-image: url(${(props) => array[props.fest][props.index]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 35%;
  border-radius: 25px;
  cursor: pointer;
  :not(:first-child) {
    ${(props) => props.animation === true && wrapAnimation};
    animation-iteration-count: 1;
  }

  :nth-child(3) {
    grid-row: span 3 / auto;
  }

  p {
    transform: skew(-30deg);
    border-radius: 50% 0 50% 0;
    box-shadow: 0px 0px 0px 1px #353b48;
    transition: box-shadow 0.6s linear;
    box-shadow: ${(props) => props.act && "0px 0px 0px 1px black"};
    width: 80px;

    :hover {
      transition: all ease-out 0.55s;
      color: #b8860b;
    }
    ${(props) =>
      props.act &&
      `
    background-color: black;
    opacity: 0.7;
    transition: all ease-out 0.95s;
    transform: skew(0deg);
    min-width: 50px;
    color: #b8860b;
    padding: 5px;
      
  `}
  }
`;

const Year = (props) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, [props.fest]);

  useEffect(() => {
    setTimeout(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 1200);
  }, [animation]);

  return <YearStyle {...props} animation={animation} />;
};

export default Year;
