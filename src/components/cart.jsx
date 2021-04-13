import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { uniq } from "lodash";
import { getAxiosFrame } from "../server/serverFest";
import { useParams } from "react-router";
import styled from "styled-components";

const CartFilm = styled.div`
  min-height: 100vh;
  padding: 20px;
  max-width: 1366px;
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  .poster {
    grid-row: span 2 / auto;
  }
`;

const Item = styled.div`
  max-width: 300px;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

const Cart = ({ film, idItem }) => {
  let { id } = useParams();

  const [frame, setFrame] = useState(null);
  useEffect(() => {
    getAxiosFrame(id).then((response) => {
      setFrame(response);
    });
  }, [id]);

  // console.log(id);
  // console.log("filmCart", film);
  // console.log("idItem", idItem);
  console.log(frame);

  if (film && idItem && frame) {
    const randomRepeat = (min, max, size) => {
      let values = [];

      while (values.length < size) {
        values.push(Math.floor(Math.random() * (max - min + 1) + min));

        values = uniq(values);
      }

      return values;
    };

    const array = randomRepeat(0, frame.length - 3, 11);

    console.log(array);

    const frameItems = [...Array(11)].map((item, index) => {
      if (index !== 4) {
        console.log(frame[Number(array[index])]);
        return (
          <Item key={index}>
            <img src={frame[Number(array[index])].preview} alt="" />
          </Item>
        );
      } else {
        return (
          <Item className="poster" key={index}>
            <img src={film.posterUrlPreview} alt="" />
          </Item>
        );
      }
    });

    return (
      <CartFilm>
        <CartGrid>{frameItems}</CartGrid>
      </CartFilm>
    );
  }
  return (
    <>
      <div>id: {id}</div>
    </>
  );
};

const mapStateToProps = ({ cart: { film, idItem } }) => {
  return { film, idItem };
};

export default connect(mapStateToProps)(Cart);
