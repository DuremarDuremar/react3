import React, { useState, useEffect } from "react";
import cinemaButton from "../images/cinemaButton.png";
import styled from "styled-components";

const DirectStyle = styled.section``;

const Cinema = styled.div`
  width: 120px;
  height: 120px;
  cursor: pointer;
  /* padding-left: ${(props) => !props.r480 && "8vw"}; */

  img {
    max-width: 100%;
    transition: all 0.6s linear;
    :hover {
      background-color: #dfe4ea;
    }
  }
`;

const Direct = () => {
  return (
    <DirectStyle>
      <Cinema>
        <img src={cinemaButton} alt="img" />
      </Cinema>
    </DirectStyle>
  );
};

export default Direct;
