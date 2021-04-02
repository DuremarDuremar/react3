import React from "react";
import logo from "../images/cinemaLogo.jpg";
import styled from "styled-components";

const FestStyle = styled.section`
  padding: 25px;
`;
const FestName = styled.nav`
  display: flex;
  background-color: #fff;
`;
const NameNav = styled.ul`
  display: flex;
`;
const NameLogo = styled.div`
  img {
    width: calc(170px + 15vw);
    height: calc(90px + 5vw);
    border-radius: 50px;
    border: 7px solid #000;
  }
`;
const FestYear = styled.nav``;
const FestList = styled.div``;

const Fest = () => {
  return (
    <FestStyle>
      <FestName>
        <NameNav>
          <li>Cannes</li>
          <li>Venice</li>
          <li>Berlin</li>
          <li>Sundance</li>
        </NameNav>
        <NameLogo>
          <img src={logo} alt="logo" />
        </NameLogo>
      </FestName>
      <FestYear>year</FestYear>
      <FestList>list</FestList>
    </FestStyle>
  );
};

export default Fest;
