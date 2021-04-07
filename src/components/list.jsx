import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAxiosFilm } from "../server/serverFest";

const List = (props) => {
  const [items, setItems] = useState(null);
  const [itemsView, setItemsView] = useState(0, 8);
  useEffect(() => {
    getAxiosFilm(props.fest, props.year, itemsView).then((response) =>
      setItems(response)
    );
  }, [props.fest, props.year]);

  console.log(items);

  if (items) {
    return (
      <div>
        {items.map((item, index) => {
          return <div key={index}>{item.nameRu}</div>;
        })}
      </div>
    );
  } else {
    return <p>55</p>;
  }
};

export default List;
