import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { animateScroll as scroll } from "react-scroll";
import { getAxiosFilm } from "../server/serverFest";

const Items = styled(InfiniteScroll)`
  margin-top: 40px;
  display: ${(props) => (props.r480 ? "grid" : "div")};
  position: relative;
  ${(props) =>
    !props.r480 &&
    `
    width: 220px;
    height: 420px;
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
    cursor: pointer;
    width: 100%;
    max-height: 500px;
  }
`;

const ItemInfo = styled.div`
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

const List = ({ fest, year, r1100, r780, r480 }) => {
  let loadingsB = r1100 ? 8 : r780 ? 6 : 4;

  const [items, setItems] = useState(null);
  const [itemsView, setItemsView] = useState([0, loadingsB]);
  const [hasMore, setHasMore] = useState(true);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(1);

  useEffect(() => {
    if (!r480 && items) {
      setItems(items.reverse());
    }
  }, [items, r480]);

  useEffect(() => {
    getAxiosFilm(fest, year, itemsView).then((response) => {
      response.length < 1 && setHasMore(false);
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
    });
  }, [fest, year, itemsView, r480]);

  const filter480 = (id) => {
    if (!r480) {
      const newItem = items.filter((item) => item.filmId !== id);
      setItems(newItem);
      setCounterA(counterB);
      setCounterB(counterB + 1);
    }
  };

  useEffect(() => {
    if (!r480) {
      setItemsView([loadingsB + counterA, loadingsB + counterB]);
    } else {
      setItemsView([loadingsB + counterA, loadingsB + counterB]);
    }
  }, [counterA, counterB, loadingsB, r480]);

  // console.log("counterA", counterA);
  // console.log("counterB", counterB);
  // console.log(items, "items");
  // console.log("itemsView", itemsView);

  if (items) {
    return (
      <Items
        pageStart={items.length}
        loadMore={() => {
          r480 &&
            setTimeout(() => {
              setItemsView((prevItemsView) => [
                prevItemsView[1],
                prevItemsView[1] + loadingsB,
              ]);
            }, 1000);
        }}
        hasMore={hasMore}
        loader={<Loading key={0}>Loading...</Loading>}
        threshold={0}
        r1100={r1100 ? 1 : 0}
        r780={r780 ? 1 : 0}
        r480={r480 ? 1 : 0}
      >
        {items.map((item, index) => {
          return (
            <Item
              key={`${item.filmId} + item.nameEn + ${index}`}
              r480={r480}
              onClick={() => filter480(item.filmId)}
            >
              <img src={item.posterUrlPreview} alt="img" />
              <ItemInfo
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(item.filmId);
                }}
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
        {!hasMore && r480 && (
          <Up>
            <i
              className="fas fa-angle-double-up fa-4x"
              onClick={() => scroll.scrollToTop()}
            ></i>
          </Up>
        )}
      </Items>
    );
  } else {
    return <Loading>Loading...</Loading>;
  }
};

const mapStateToProps = ({ responsive: { r1100, r780, r480 } }) => {
  return { r1100, r780, r480 };
};

export default connect(mapStateToProps)(List);
