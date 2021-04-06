import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAxiosFilm } from "../server/serverFest";

const List = (props) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    getAxiosFilm(props.fest, props.year).then((response) => setItem(response));
  }, [props.fest, props.year]);

  console.log(item);

  return (
    <div>
      {/* <p>{Cannes["2010s"][0]}</p> */}
      {/* <p>{array[listLink][0]}</p> */}
    </div>
  );
};

export default List;
