import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
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
  useEffect(() => {
    getAxiosFilm(props.fest, props.year, itemsView).then((response) =>
      setItems(!items ? response : [...items, ...response])
    );
  }, [props.fest, props.year, itemsView]);

  console.log(items);

  if (items) {
    return (
      <ListStyle>
        <InfiniteScroll
          dataLength={items.length}
          next={() => setItemsView([items.length, items.length + 8])}
          hasMore={true}
        >
          {items.map((item, index) => {
            return (
              <Item key={index}>
                <img src={item.posterUrlPreview} alt="img" />
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
