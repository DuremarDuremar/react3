import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { newFilm, newId } from "../reducers/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { getAxiosFilm } from "../server/serverFest";

const Items = styled.div`
  margin-top: 40px;
  display: ${(props) => (props.r480 ? "grid" : "div")};
  position: relative;
  padding-bottom: 50px;
  ${(props) =>
    !props.r480 &&
    `
    width: calc(60px + 40vw);
    height: calc(250px + 50vw);
    margin: 50px auto;
    transform: rotate(10deg);
    cursor:pointer;
  `}
  grid-gap: 20px;
  text-align: center;
  grid-template-columns: ${(props) =>
    props.r1100
      ? "repeat(4, 1fr)"
      : props.r780
      ? "repeat(3, 1fr)"
      : "repeat(2, 1fr)"};
`;

const Item = styled.div`
  background-color: #b8860b;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.15s ease-in-out all;
  z-index: 1;
  :hover div {
    border: 4px solid black;
    box-shadow: inset -5px -5px 5px 0 rgba(0, 0, 0, 0.5),
      inset 5px 5px 5px 0 rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.r480 &&
    `
  :hover{
    transform: scale(1.04) 
  }
  `}
  ${(props) =>
    !props.r480 &&
    `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: 50% 200% 0;
    outline: 1px solid #fbfbfb;
    :hover {
    border-radius: 95px 0 0 0;
  }
  :after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30;
    box-shadow: -5px 2px 15px rgba(0, 0, 0, 0.3);
    transition: 0.15s ease-in-out all;
  }
  :hover:after {
    width: 75px;
    height: 55px;
    transform: rotate(-8deg) translate3d(0, 0, 0);
    background-color: #b8860b;
  }
  `}

  img {
    width: 100%;
    max-height: 500px;
  }
`;

const ItemInfo = styled(Link)`
  cursor: pointer;
  color: #fbfbfb;
  .name,
  .year {
    background-color: #b8860b;
  }
  .country {
    background-color: black;
  }
  .year {
    border-bottom-right-radius: 15% 60%;
    border-bottom-left-radius: 15% 60%;
  }
`;

const Up = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    transition: 0.25s ease-in-out all;
    color: black;
    cursor: pointer;
    :hover {
      color: #b8860b;
    }
  }
`;

const Loading = styled.div``;

const Infiniti = styled.div`
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  background-color: #2f3542;
  opacity: 0.5;
  cursor: wait;
  z-index: 2;
`;

const List = ({ newFilm, newId, idItem, fest, year, r1100, r780, r480 }) => {
  let loadingsB = r1100 ? 8 : r780 ? 6 : 4;

  const [items, setItems] = useState(null);
  const [itemsView, setItemsView] = useState([0, loadingsB]);
  const [hasMore, setHasMore] = useState(false);
  const [axios, setAxios] = useState(true);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(1);

  useEffect(() => {
    if (!r480 && items) {
      setItems(items.reverse());
    }
  }, [items, r480]);

  useEffect(() => {
    if (!r480) {
      setItemsView([loadingsB + counterA, loadingsB + counterB]);
    }
  }, [counterA, counterB, loadingsB, r480]);

  useEffect(() => {
    if (hasMore) {
      r480 &&
        setItemsView((prevItemsView) => [
          prevItemsView[1],
          prevItemsView[1] + loadingsB,
        ]);
    }
    setHasMore(false);
  }, [hasMore, r480, loadingsB]);

  useEffect(() => {
    getAxiosFilm(fest, year, itemsView, newId).then((response) => {
      setItems((prevItems) => {
        let arr = !prevItems
          ? response
          : r480
          ? [...prevItems, ...response]
          : [...response, ...prevItems];
        return arr.filter(
          (item, index, a) =>
            a.findIndex((t) => t.filmId === item.filmId) === index
        );
      });
      response.length < 1 && setAxios(false);
    });
  }, [fest, year, itemsView, r480, newId]);

  const filter480 = (id) => {
    if (!r480) {
      const newItem = items.filter((item) => item.filmId !== id);
      setItems(newItem);
      setCounterA(counterB);
      setCounterB(counterB + 1);
    }
  };

  // console.log("counterA", counterA);
  // console.log("counterB", counterB);
  // console.log(items, "items");
  // console.log("itemsView", itemsView);
  // console.log("hasMore", hasMore);
  // console.log("idItems", idItems);

  if (items) {
    return (
      <Items r1100={r1100 ? 1 : 0} r780={r780 ? 1 : 0} r480={r480 ? 1 : 0}>
        {items.map((item, index) => {
          let link = `/${item.filmId}`;
          return (
            <Item
              key={`${item.filmId} + item.nameEn + ${index}`}
              r480={r480}
              onClick={() => filter480(item.filmId)}
            >
              <img src={item.posterUrlPreview} alt="img" />
              <ItemInfo
                onClick={(e) => {
                  newId(idItem.filter((el) => el[0] === item.filmId));
                  newFilm(item);
                  setHasMore(false);
                  e.stopPropagation();
                }}
                to={link}
              >
                <div className="name">{item.nameRu}</div>
                <div className="country">
                  {item.countries.map((item, index) =>
                    index < 2 ? <span key={index}>{item.country} </span> : null
                  )}
                </div>
                <div className="year">{item.year}</div>
              </ItemInfo>
            </Item>
          );
        })}
        {!axios && r480 && (
          <Up>
            <i
              className="fas fa-angle-double-up fa-4x"
              onClick={() => scroll.scrollToTop()}
            ></i>
          </Up>
        )}
        {axios && <Infiniti onMouseEnter={() => setHasMore(true)} />}
      </Items>
    );
  } else {
    return <Loading>Loading...</Loading>;
  }
};

const mapStateToProps = ({
  responsive: { r1100, r780, r480 },
  cart: { idItem },
}) => {
  return { r1100, r780, r480, idItem };
};

const mapDispatchToProps = { newFilm, newId };

export default connect(mapStateToProps, mapDispatchToProps)(List);
