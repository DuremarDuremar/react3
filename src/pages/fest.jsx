import React, { useState, useEffect } from "react";
import logo from "../images/cinemaLogo.jpg";
import macabre from "../images/danse-macabre.png";
import charlie from "../images/charlie.png";
import background from "../images/background.jpg";
import Images from "../components/images";
import { connect } from "react-redux";
import Year from "../components/yearItem";
import List from "../components/list";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import styled, { keyframes, css } from "styled-components";

const FestStyle = styled.section`
  padding: 25px;
  color: #dfe4ea;
  ${(props) =>
    !props.r780 &&
    `
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: calc(280px + 57vw) 120px;
  background-attachment: local;
  background-position: 50% 0;
 `}
  ${(props) =>
    !props.r480 &&
    `
  background-size: calc(280px + 57vw) 165px;
  
 `}
`;
const FestName = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const NameNav = styled.ul`
  padding-top: 30px;
  ${(props) =>
    !props.r480 &&
    `
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
 `}
  ${(props) =>
    props.r480 &&
    `
  display: flex;
  flex: 1 1 55%;
  justify-content: space-around;
  flex-wrap: wrap;
 `}

  ${(props) =>
    props.r780 &&
    `
  background-image: url(${macabre});
  background-repeat: no-repeat;
  background-size: calc(180px + 37vw) calc(200px + 10vw);
  background-attachment: local;
 `}
  padding-right: ${(props) => props.r780 && "20px"};
`;

const Name = styled.li`
  transform: skew(-30deg);
  border-radius: 50% 0 50% 0;
  height: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 1px #353b48;
  transition: box-shadow 0.6s linear;
  box-shadow: ${(props) => props.act && "0px 0px 0px 3px black"};
  background-color: ${(props) => !props.r480 && "black"};

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

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const wrapAnimation = css`
  animation: ${rotate} 0.8s linear infinite;
`;

const FestCircles = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: ${(props) => (props.r780 ? "-130px" : "-165px")};
  left: ${(props) => (props.r780 ? "55%" : props.r480 ? "63vw" : "60%")};

  ${(props) => props.animation === true && wrapAnimation};
  animation-iteration-count: 1;
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
  display: ${(props) => (props.r780 ? "grid" : "div")};
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Chaplin = styled.div`
  width: 120px;
  height: 120px;
  cursor: pointer;
  padding-left: ${(props) => !props.r480 && "8vw"};

  img {
    max-width: 100%;
    border-radius: 100%;
    transition: all 0.6s linear;
    :hover {
      background-color: #dfe4ea;
    }
  }
`;

const FestTitle = styled.div`
  font-size: calc(15px + 1vw);
  font-style: italic;
  font-family: "New Tegomin", serif;
  text-align: center;
`;

const Fest = ({ r780, r480 }) => {
  const [fest, setFest] = useState("Cannes");
  const [year, setYear] = useState("2010s");
  const [list, setList] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, [fest, year]);

  useEffect(() => {
    setTimeout(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 1000);
  }, [animation]);

  const imagesLogo = {
    top: `${fest}Top.png`,
    bottom: `${fest}Bottom.png`,
  };

  const itemYear = [
    <Link to="/direct">
      <Chaplin r480={r480}>
        <img src={charlie} alt="" />
      </Chaplin>
    </Link>,
    "2010s",
    null,
    "2000s",
    "1990s",
    "1980s",
    fest === "Sundance" ? null : "1970s",
    fest === "Sundance" ? null : "1960s",
    fest === "Sundance" ? null : "1950s",
    fest === "Berlin" || fest === "Sundance" ? null : "1940s",
  ].map((item, index) => (
    <Year
      key={index}
      act={item === year ? true : false}
      onClick={() => {
        setYear(typeof item === "string" ? item : year);
        setList((prevList) => prevList === true && false);
        !r780 && scroll.scrollToTop();
      }}
      index={index}
      fest={`${fest}PosterImages`}
      r780={r780}
    >
      {typeof item === "string" ? <p>{item}</p> : item}
    </Year>
  ));

  const itemName = ["Cannes", "Venice", "Berlin", "Sundance"].map(
    (item, index) => (
      <Name
        key={index}
        act={item === fest ? true : false}
        onClick={() => {
          setFest(item);
          setList(false);
        }}
        r480={r480}
      >
        <span>{item}</span>
      </Name>
    )
  );

  return (
    <FestStyle r780={r780} r480={r480}>
      {!r780 && <FestTitle>Cinema Festivals</FestTitle>}
      <FestName>
        <NameNav r780={r780} r480={r480}>
          {itemName}
        </NameNav>
        {r780 && (
          <NameLogo>
            <img src={logo} alt="logo" />
          </NameLogo>
        )}
        <FestCircles animation={animation} r780={r780} r480={r480}>
          <FestCircleTop className="circletop">
            <Images
              pic={`assets/${imagesLogo.top}`}
              top
              sun={fest === "Sundance" ? true : false}
            />
          </FestCircleTop>
          <i
            className={
              !list ? "fas fa-chevron-down fa-2x" : "fas fa-chevron-up fa-2x"
            }
            onClick={() => {
              setList(!list);
              scroll.scrollToBottom();
            }}
          ></i>
          <FestCircleBottom className="circlebottom">
            <Images
              pic={`assets/${imagesLogo.bottom}`}
              bottom
              sun={fest === "Sundance" ? true : false}
            />
          </FestCircleBottom>
        </FestCircles>
      </FestName>
      <FestYear r780={r780 ? 1 : 0}>{itemYear}</FestYear>
      {list && <List fest={fest} year={year} />}
    </FestStyle>
  );
};

const mapStateToProps = ({ responsive: { r780, r480 } }) => {
  return { r780, r480 };
};

export default connect(mapStateToProps)(Fest);
