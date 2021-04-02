import React from "react";
import logo from "../images/cinemaLogo.jpg";
import macabre from "../images/danse-macabre.png";
import Images from "../components/images";
import styled from "styled-components";

const FestStyle = styled.section`
  padding: 25px;
`;
const FestName = styled.nav`
  display: flex;
  /* background-color: green; */
  justify-content: space-between;
  color: #dfe4ea;
  position: relative;
`;
const NameNav = styled.ul`
  display: flex;
  padding-top: 30px;
  flex: 1 1 55%;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url(${macabre});
  background-repeat: no-repeat;
  background-size: calc(230px + 37vw) calc(260px + 10vw);
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

const FestCircles = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: -100px;
  left: 50%;

  i {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }

  :hover .circlebottom {
    transform: translateY(20px);
    transition: all ease-out 0.35s;
  }
  :hover .circletop {
    transform: translateY(-20px);
    transition: all ease-out 0.35s;
  }

  :hover i {
    opacity: 100;
  }
`;

const FestCircleTop = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background-color: #353b48;
  border-top: 2px solid #b8860b;
`;
const FestCircleBottom = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  background-color: #353b48;
  border-bottom: 2px solid #b8860b;
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
        <FestCircles>
          <FestCircleTop className="circletop">
            <Images pic={"assets/cannesTop.png"} top />
          </FestCircleTop>
          <i className="fas fa-chevron-down fa-2x"></i>
          <FestCircleBottom className="circlebottom">
            <Images pic={"assets/cannesBottom.png"} bottom />
          </FestCircleBottom>
        </FestCircles>
      </FestName>
      <FestYear>year</FestYear>
      <FestList>list</FestList>
    </FestStyle>
  );
};

export default Fest;
