import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { getAxiosFilm } from "../server/serverFest";

const Items = styled(InfiniteScroll)`
  margin-top: 40px;
  display: ${(props) => (props.r480 ? "grid" : "div")};
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
  img {
    cursor: pointer;
    width: 100%;
    max-height: 500px;
    /* border-bottom-right-radius: 15% 60%; */
    /* border-bottom-left-radius: 15% 60%; */
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

const Loading = styled.div``;

const List = ({ fest, year, r1100, r780, r480 }) => {
  let loadingsB = r1100 ? 8 : r780 ? 6 : r480 ? 4 : 2;

  const [items, setItems] = useState(null);
  const [itemsView, setItemsView] = useState([0, loadingsB]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getAxiosFilm(fest, year, itemsView).then((response) => {
      response.length < 1 && setHasMore(false);
      setItems((prevItems) =>
        !prevItems ? response : [...prevItems, ...response]
      );
    });
  }, [fest, year, itemsView]);

  // console.log("r480", r480);
  // console.log("r780", r780);
  console.log(itemsView);

  if (items) {
    return (
      <Items
        pageStart={items.length}
        loadMore={() =>
          setTimeout(() => {
            setItemsView((prevItemsView) => [
              prevItemsView[1],
              prevItemsView[1] + loadingsB,
            ]);
          }, 1000)
        }
        hasMore={hasMore}
        loader={<Loading key={0}>Loading...</Loading>}
        threshold={0}
        r1100={r1100 ? 1 : 0}
        r780={r780 ? 1 : 0}
        r480={r480 ? 1 : 0}
      >
        {items.map((item, index) => {
          return (
            <Item key={`${item.filmId} + item.nameEn + ${index}`}>
              <img src={item.posterUrlPreview} alt="img" />
              <ItemInfo>
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
      </Items>
    );
  } else {
    return <p>55</p>;
  }
};

const mapStateToProps = ({ responsive: { r1100, r780, r480 } }) => {
  return { r1100, r780, r480 };
};

export default connect(mapStateToProps)(List);
