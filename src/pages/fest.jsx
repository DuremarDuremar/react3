import React from "react";
import logo from "../images/cinemaLogo.jpg";
import macabre from "../images/danse-macabre.png";
import styled from "styled-components";

const FestStyle = styled.section`
  padding: 25px;
`;
const FestName = styled.nav`
  display: flex;
  background-color: green;
  justify-content: space-between;
  color: #dfe4ea;
`;
const NameNav = styled.ul`
  display: flex;
  padding-top: 30px;
  flex: 1 1 55%;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url(${macabre});
  background-repeat: no-repeat;
  background-size: calc(270px + 34vw) calc(260px + 10vw);
  background-attachment: fixed;
`;
const NameLogo = styled.div`
  position: relative;
  img {
    width: calc(170px + 15vw);
    height: calc(90px + 5vw);
    border-radius: 50px;
    border: 7px solid #000;
  }
  ::before {
    content: "Cinema Festivals";
    font-size: calc(15px + 1vw);
    font-style: italic;
    font-family: "New Tegomin", serif;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
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
