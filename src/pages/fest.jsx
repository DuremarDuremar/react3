import React, { useState, useEffect } from "react";
import logo from "../images/cinemaLogo.jpg";
import macabre from "../images/danse-macabre.png";
import Images from "../components/images";
import Year from "../components/yearItem";
import styled from "styled-components";

const FestStyle = styled.section`
  padding: 25px;
  color: #dfe4ea;
`;
const FestName = styled.nav`
  display: flex;
  /* background-color: green; */
  justify-content: space-between;
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
  background-size: calc(180px + 37vw) calc(200px + 10vw);
  background-attachment: local;
  padding-right: 20px;
`;

const Name = styled.li`
  transform: skew(-30deg);
  border-radius: 50% 0 50% 0;
  height: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 1px #353b48;
  transition: box-shadow 0.6s linear;
  box-shadow: ${(props) => props.act && "0px 0px 0px 3px black"};

  span {
    transition: all ease-out 0.35s;

    ${(props) =>
      props.act &&
      `
    display: inline-block;
    transform: skew(30deg);
    min-width: 50px;
    color: #b8860b;
    padding: 5px;
      
  `}
  }
  :hover span {
    display: inline-block;
    transform: skew(30deg);
    min-width: 50px;
    color: #b8860b;
  }
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
  bottom: -130px;
  left: 55%;

  i {
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    color: #b8860b;
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
const FestYear = styled.nav`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const FestList = styled.div``;

const Fest = () => {
  const [fest, setFest] = useState("Cannes");
  const [year, setYear] = useState("2010s");

  const imagesLogo = {
    top: `${fest}Top.png`,
    bottom: `${fest}Bottom.png`,
  };

  const itemYear = [
    "2020s",
    "2010s",
    null,
    "2000s",
    "1990s",
    "1980s",
    "1970s",
    "1960s",
    "1950s",
    "1940s",
  ].map((item, index) => (
    <Year
      key={index}
      act={item === year ? true : false}
      onClick={() => setYear(item)}
      index={index}
      fest={`${fest}PosterImages`}
    >
      {item ? <p>{item}</p> : null}
    </Year>
  ));

  const itemName = ["Cannes", "Venice", "Berlin", "Sundance"].map(
    (item, index) => (
      <Name
        key={index}
        act={item === fest ? true : false}
        onClick={() => setFest(item)}
      >
        <span>{item}</span>
      </Name>
    )
  );

  return (
    <FestStyle>
      <FestName>
        <NameNav>{itemName}</NameNav>
        <NameLogo>
          <img src={logo} alt="logo" />
        </NameLogo>
        <FestCircles>
          <FestCircleTop className="circletop">
            <Images
              pic={`assets/${imagesLogo.top}`}
              top
              sun={fest === "Sundance" ? true : false}
            />
          </FestCircleTop>
          <i className="fas fa-chevron-down fa-2x"></i>
          <FestCircleBottom className="circlebottom">
            <Images
              pic={`assets/${imagesLogo.bottom}`}
              bottom
              sun={fest === "Sundance" ? true : false}
            />
          </FestCircleBottom>
        </FestCircles>
      </FestName>
      <FestYear>{itemYear}</FestYear>
      <FestList>list</FestList>
    </FestStyle>
  );
};

export default Fest;
