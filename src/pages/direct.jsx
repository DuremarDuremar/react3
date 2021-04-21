import React from "react";
import cinemaButton from "../images/cinemaButton.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DirectStyle = styled.section`
  display: flex;
  justify-content: center;
`;

const Cinema = styled.div`
  width: 120px;
  height: 120px;
  cursor: pointer;

  img {
    max-width: 100%;
    transition: all 0.6s linear;
    :hover {
      background-color: #dfe4ea;
    }
  }
`;
const Content = styled.div`
  text-align: center;
`;

const Direct = () => {
  return (
    <DirectStyle>
      <Cinema>
        <Link to="/">
          <img src={cinemaButton} alt="img" />
        </Link>
        <Content>section in development</Content>
      </Cinema>
    </DirectStyle>
  );
};

export default Direct;
