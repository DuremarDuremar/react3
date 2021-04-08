import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { getAxiosFilm } from "../server/serverFest";

const ListStyle = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Item = styled.div`
  img {
    max-width: 100%;
    height: 400px;
  }
`;

const List = (props) => {
  const [items, setItems] = useState(null);
  const [itemsView, setItemsView] = useState([0, 8]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    getAxiosFilm(props.fest, props.year, itemsView).then((response) => {
      setItems((prevItems) =>
        !prevItems ? response : [...prevItems, ...response]
      );
      console.log(response);
    });
  }, [props.fest, props.year, itemsView]);

  useEffect(() => {
    if (items) {
      itemsView[1] > items.length && setHasMore(false);
    }
  }, [itemsView, items]);

  console.log("itemsView[1]", itemsView[1]);
  console.log("hasMore", hasMore);

  // const ff = useCallback(() => {
  //   setItemsView((prevItemsView) => [prevItemsView[1], prevItemsView[1] + 8]);
  // }, []);

  if (items) {
    return (
      <ListStyle>
        <InfiniteScroll
          // pageStart={0}
          loadMore={() =>
            setItemsView((prevItemsView) => [
              prevItemsView[1],
              prevItemsView[1] + 8,
            ])
          }
          hasMore={hasMore}
          loader={<p key={0}>loader</p>}
        >
          {items.map((item, index) => {
            return (
              <Item key={item.filmId + index}>
                {/* <img src={item.posterUrlPreview} alt="img" /> */}
                <p>{item.nameRu}</p>
              </Item>
            );
          })}
        </InfiniteScroll>
      </ListStyle>
    );
  } else {
    return <p>55</p>;
  }
};

export default List;
