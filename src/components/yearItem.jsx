import React from "react";
import styled from "styled-components";

const logoPosterImages = [
  null,
  "https://kinopoiskapiunofficial.tech/images/posters/kp_small/980367.jpg",
  null,
  "https://kinopoiskapiunofficial.tech/images/posters/kp_small/400873.jpg",
  "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e5222bd4-bc6d-4370-bd1a-e33f3f5668ee/360",
];

const YearStyle = styled.div`
  text-align: center;
  font-size: calc(14px + 1vw);
  height: 130px;
  background-image: url(${(props) => logoPosterImages[props.index]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  :nth-child(3) {
    grid-row: span 3 / auto;
  }

  p {
    transform: skew(-30deg);
    border-radius: 50% 0 50% 0;
    box-shadow: 0px 0px 0px 1px #353b48;
    transition: box-shadow 0.6s linear;
    box-shadow: ${(props) => props.act && "0px 0px 0px 3px black"};
    width: 80px;
    cursor: pointer;
    :hover {
      transition: all ease-out 0.55s;
      color: #b8860b;
    }
    ${(props) =>
      props.act &&
      `
    transition: all ease-out 0.95s;
    transform: skew(0deg);
    min-width: 50px;
    color: #b8860b;
    padding: 5px;
      
  `}
  }
`;

const Year = (props) => {
  return <YearStyle {...props} />;
};

export default Year;
