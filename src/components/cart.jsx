import React, { useState, useEffect, useCallback } from "react";
import {
  getAxiosFrame,
  getAxiosFilm,
  getAxiosDirect,
  array,
} from "../server/serverFest";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router";
import rama from "../images/rama.png";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1366px;
`;

const CartRouting = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    transition: all ease-out 0.35s;
    color: #fff;
    cursor: pointer;
    :hover {
      color: #b8860b;
    }
  }
`;

const CartSlider = styled.div``;

const CartFilm = styled.div`
  display: ${(props) => (props.r780 ? "flex" : "block")};
  min-height: 100vh;
  padding-top: 15px;
  /* display: flex; */
  overflow: hidden;
  position: relative;
`;

const CartFrame = styled.div`
  transform: ${(props) => !props.r1300 && "translateX(90%)"};
  /* transform: translateX(90%); */
  height: 300px;
  width: 200px;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  border-top: 10px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;
  transition: all 0.8s linear;
  z-index: 1;

  :hover {
    transform: translateX(0);
    /* position: fixed; */
    /* top: 10%; */
    /* height: 500px; */
    width: 300px;
  }
  :after {
    content: "";
    width: 30px;
    height: 1180px;
    display: block;
    background: linear-gradient(
      to top,
      black 2.5%,
      #fff 2.5% 5%,
      black 5% 7.5%,
      #fff 7.5% 10%,
      black 10% 12.5%,
      #fff 12.5% 15%,
      black 15% 17.5%,
      #fff 17.5% 20%,
      black 20% 22.5%,
      #fff 22.5% 25%,
      black 25% 27.5%,
      #fff 27.5% 30%,
      black 30% 32.5%,
      #fff 32.5% 35%,
      black 35% 37.5%,
      #fff 37.5% 40%,
      black 40% 42.5%,
      #fff 42.5% 45%,
      black 45% 47.5%,
      #fff 47.5% 50%,
      black 50% 52.5%,
      #fff 52.5% 55%,
      black 55% 57.5%,
      #fff 57.5% 60%,
      black 60% 62.5%,
      #fff 62.5% 65%,
      black 65% 67.5%,
      #fff 67.5% 70%,
      black 70% 72.5%,
      #fff 72.5% 75%,
      black 75% 77.5%,
      #fff 77.5% 80%,
      black 80% 82.5%,
      #fff 82.5% 85%,
      black 85% 87.5%,
      #fff 87.5% 90%,
      black 90% 92.5%,
      #fff 92.5% 95%,
      black 95% 97.5%,
      #fff 97.5% 100%
    );
    border-right: 5px solid black;
    border-left: 8px solid black;
    position: absolute;
    left: 0;
  }

  :before {
    content: "";
    width: 30px;
    height: 1180px;
    display: block;
    background: linear-gradient(
      to top,
      black 2.5%,
      #fff 2.5% 5%,
      black 5% 7.5%,
      #fff 7.5% 10%,
      black 10% 12.5%,
      #fff 12.5% 15%,
      black 15% 17.5%,
      #fff 17.5% 20%,
      black 20% 22.5%,
      #fff 22.5% 25%,
      black 25% 27.5%,
      #fff 27.5% 30%,
      black 30% 32.5%,
      #fff 32.5% 35%,
      black 35% 37.5%,
      #fff 37.5% 40%,
      black 40% 42.5%,
      #fff 42.5% 45%,
      black 45% 47.5%,
      #fff 47.5% 50%,
      black 50% 52.5%,
      #fff 52.5% 55%,
      black 55% 57.5%,
      #fff 57.5% 60%,
      black 60% 62.5%,
      #fff 62.5% 65%,
      black 65% 67.5%,
      #fff 67.5% 70%,
      black 70% 72.5%,
      #fff 72.5% 75%,
      black 75% 77.5%,
      #fff 77.5% 80%,
      black 80% 82.5%,
      #fff 82.5% 85%,
      black 85% 87.5%,
      #fff 87.5% 90%,
      black 90% 92.5%,
      #fff 92.5% 95%,
      black 95% 97.5%,
      #fff 97.5% 100%
    );
    border-right: 8px solid black;
    border-left: 5px solid black;
    position: absolute;
    right: 0;
  }
`;

const Item = styled.div`
  width: 170px;
  max-height: 210px;
  :hover {
    transform: scale(2);
    z-index: 2;
  }

  :first-child {
    padding-top: 10px;
    :hover {
      padding-top: 40px;
    }
  }
  img {
    max-width: 100%;
    /* max-height: 100%; */
  }
`;

const CartPoster = styled.div`
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  ${(props) =>
    !props.r780 &&
    `
  display: flex;
  align-items: center;
  justify-content: center;
  `}

  .frame {
    transition: all 0.8s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.3) translateY(20%);
    }
  }
  img {
    /* max-width: 100%; */
    max-width: ${(props) =>
      props.r1100 ? "100%" : props.r480 ? "280px" : "210px"};
    min-width: ${(props) => (props.r480 ? "180px" : "100px")};
    /* min-width: 180px; */
    border: 3vw solid transparent;
    border-image: url(${rama}) 25% round;
  }
  i {
    color: #fff;
    cursor: pointer;
    transition: all ease-out 0.35s;
    :hover {
      color: #b8860b;
    }
  }
`;

const CartInfo = styled.div`
  padding-left: ${(props) => props.r780 && "100px"};
  color: #dfe4ea;
  width: ${(props) => (props.r1100 ? "300px" : props.r480 ? "220px" : "100%")};
  text-align: center;
  margin: ${(props) => !props.r780 && "30px auto 0"};
`;

const CartName = styled.div`
  p {
    :first-child {
      font-size: 30px;
    }
    :last-child {
      position: relative;
    }

    :last-child:after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: -50%;
      left: 20%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
  }
`;

const CartYear = styled.div`
  padding-top: 20px;
  text-align: right;
  div {
    padding-top: 5px;
    font-size: 22px;
    position: relative;
    :after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: -50%;
      right: 20%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
  }
`;

const CartPerson = styled.div`
  max-width: 400px;
  margin: 40px auto 0;
  position: relative;
  p {
    white-space: nowrap;
    font-size: 19px;
    text-align: left;
    color: #fff;
    border-bottom: 2px solid #fff;
    :last-child {
      font-size: 14px;
      padding-top: 10px;
      text-align: right;
      border-bottom: none;
    }
  }

  img {
    max-width: ${(props) => (props.r1100 ? "240px" : "140px")};
    /* max-width: 100%; */
    min-width: 50px;
    border-radius: 25%;
    box-shadow: 0 0 0 2px #b8860b;
  }
  .imgOne {
    z-index: 1;
    position: relative;
  }
  .imgTwo {
    position: absolute;
    left: ${(props) => (props.r480 ? "50%" : "40%")};
    top: 0;
    display: block;
    :hover {
      z-index: 2;
    }
  }
`;

const Cart = ({ r1300, r1100, r780, r480 }) => {
  let { id } = useParams();

  const [frame, setFrame] = useState(null);
  const [film, setFilm] = useState(null);
  const [direct, setDirect] = useState(null);
  const [direct2, setDirect2] = useState(null);
  const [directId, setDirectId] = useState(null);
  const [num480, setNum480] = useState(0);

  console.log("direct", direct);
  console.log("direct2", direct2);

  const directFind = useCallback(
    (array) => {
      const filmsArray = Object.values(array);
      const resul = filmsArray.map((fest) => {
        return fest.filter((item) => item.length > 1 && item[0] === Number(id));
      });
      return resul.flat(2);
    },
    [id]
  );

  const SliderCart = (string) => {
    const filmsArray = Object.values(array).flat(1);

    const filmsIndex = filmsArray.map((item, index) => {
      if (item.length > 1 && item[0] === Number(id)) {
        return index;
      } else {
        return null;
      }
    });
    const filmIndex = filmsIndex.filter((item) => item);
    const resNext = filmsArray
      .filter((item, index) => {
        if (index === Number(filmIndex) + 1) {
          return item;
        } else if (Number(filmIndex) === filmsArray.length - 1) {
          return filmsArray[filmsArray.length - 1];
        } else {
          return null;
        }
      })[0][0]
      .toString();
    const resPrev = filmsArray
      .filter((item, index) => {
        if (index === Number(filmIndex) - 1) {
          return item;
        } else if (Number(filmIndex) === 0) {
          return filmsArray[0];
        } else {
          return null;
        }
      })[0][0]
      .toString();

    if (string === "next") {
      return `/${resNext}`;
    } else {
      return `/${resPrev}`;
    }
  };

  useEffect(() => {
    getAxiosFrame(id).then((response) => {
      setFrame(response);
    });
  }, [id]);

  useEffect(() => {
    getAxiosFilm(id).then((response) => {
      setFilm(response);
    });
  }, [id]);

  useEffect(() => {
    setDirectId(directFind(array));
  }, [directFind]);

  useEffect(() => {
    if (directId) {
      getAxiosDirect(directId[1]).then((response) => {
        setDirect(response);

        if (directId.length > 2) {
          getAxiosDirect(directId[2]).then((response) => {
            setDirect2(response);
          });
        }
      });
    }
  }, [directId]);

  // console.log("id", id);

  // console.log(r1300);

  // console.log("direct", direct);
  // console.log("frame", frame);
  // console.log("film", film);

  if (film && direct && frame) {
    const lengthFrame = frame.length > 8 ? 8 : frame.length;
    const frameItems = () => {
      return [...Array(lengthFrame)].map((item, index) => {
        return (
          <Item key={index}>
            <img src={frame[index].image} alt="img" />
          </Item>
        );
      });
    };
    const slide480 = (num) => {
      const res = [...Array(lengthFrame + 1)]
        .map((item, index) => {
          if (index === lengthFrame) {
            return <img key={index} src={film.posterUrlPreview} alt="img" />;
          } else {
            return (
              <img
                key={index}
                className="frame"
                src={frame[index].image}
                alt="img"
              />
            );
          }
        })
        .reverse();
      return res.filter((item, index) => index === num);
    };

    return (
      <Wrapper>
        <CartRouting>
          <Link to="/">
            <i className="fas fa-reply fa-4x"></i>
          </Link>
          <CartSlider>
            <Link to={SliderCart("prev")}>
              <i
                className="fas fa-arrow-circle-left fa-2x"
                onClick={() => setDirect2(null)}
              ></i>
            </Link>

            <Link to={SliderCart("next")}>
              <i
                className="fas fa-arrow-circle-right fa-2x"
                onClick={() => setDirect2(null)}
              ></i>
            </Link>
          </CartSlider>
        </CartRouting>
        <CartFilm r780={r780}>
          {r480 && <CartFrame r1300={r1300}>{frameItems()}</CartFrame>}
          <CartPoster r1100={r1100} r780={r780} r480={r480}>
            {r480 ? (
              <img src={film.posterUrlPreview} alt="img" />
            ) : (
              <>
                <i
                  className="fas fa-caret-left fa-4x"
                  onClick={() =>
                    setNum480((prevNum) =>
                      prevNum > 0 ? num480 - 1 : lengthFrame
                    )
                  }
                ></i>
                {slide480(num480)}
                <i
                  className="fas fa-caret-right fa-4x"
                  onClick={() =>
                    setNum480((prevNum) =>
                      prevNum < lengthFrame ? num480 + 1 : 0
                    )
                  }
                ></i>
              </>
            )}
          </CartPoster>
          <CartInfo r1100={r1100} r780={r780} r480={r480}>
            <CartName>
              <p>{film.nameRu}</p>
              <p>{film.nameEn}</p>
            </CartName>
            <CartYear>
              {film.countries.map((item, index) =>
                index < 2 ? <span key={index}>{item.country} </span> : null
              )}
              <div>{film.year}</div>
            </CartYear>
            <CartPerson r1100={r1100} r480={r480} two={direct2 ? 1 : 0}>
              <img src={direct.posterUrl} alt="person" className="imgOne" />
              {direct2 && (
                <img src={direct2.posterUrl} alt="person" className="imgTwo" />
              )}
              <p>
                {direct.nameRu}
                {direct2 && `, ${direct2.nameRu}`}
              </p>
              <p>
                {direct.nameEn} {direct2 && `, ${direct2.nameEn}`}
              </p>
            </CartPerson>
          </CartInfo>
        </CartFilm>
      </Wrapper>
    );
  }
  return (
    <>
      <div>id: {id}</div>
    </>
  );
};

const mapStateToProps = ({ responsive: { r1300, r1100, r780, r480 } }) => {
  return { r1300, r1100, r780, r480 };
};

export default connect(mapStateToProps)(Cart);
