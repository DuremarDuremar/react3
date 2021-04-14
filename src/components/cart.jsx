import React, { useState, useEffect, useCallback } from "react";
import { uniq } from "lodash";
import { getAxiosFrame, getAxiosFilm, array } from "../server/serverFest";
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

const Cart = () => {
  let { id } = useParams();

  const [frame, setFrame] = useState(null);
  const [film, setFilm] = useState(null);
  const [direct, setDirect] = useState(null);

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
    setDirect(directFind(array));
  }, [directFind]);

  // console.log(id);
  // console.log("filmCart", film);
  // console.log("idItem", idItem);
  // console.log(direct);

  if (film && frame) {
    const randomRepeat = (min, max, size) => {
      let values = [];

      while (values.length < size) {
        values.push(Math.floor(Math.random() * (max - min + 1) + min));

        values = uniq(values);
      }

      return values;
    };

    const arrayFrame = randomRepeat(0, frame.length - 3, 11);

    const frameItems = [...Array(11)].map((item, index) => {
      if (index !== 4) {
        return (
          <Item key={index}>
            <img src={frame[Number(arrayFrame[index])].preview} alt="" />
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

export default Cart;
