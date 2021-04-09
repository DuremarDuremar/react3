import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { getAxiosFilm } from "../server/serverFest";

const Items = styled(InfiniteScroll)`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  text-align: center;
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
    height: 400px;
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

const List = (props) => {
  const [items, setItems] = useState(null);
  const [itemsView, setItemsView] = useState([0, 8]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    getAxiosFilm(props.fest, props.year, itemsView).then((response) => {
      response.length < 8 && setHasMore(false);
      setItems((prevItems) =>
        !prevItems ? response : [...prevItems, ...response]
      );
    });
  }, [props.fest, props.year, itemsView]);

  // console.log(items);

  if (items) {
    return (
      <Items
        pageStart={items.length}
        loadMore={() =>
          setTimeout(() => {
            setItemsView((prevItemsView) => [
              prevItemsView[1],
              prevItemsView[1] + 8,
            ]);
          }, 1000)
        }
        hasMore={hasMore}
        loader={<Loading key={0}>Loading...</Loading>}
        threshold={50}
        // useWindow={true}
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

export default List;
