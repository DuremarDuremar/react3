import React, { useState, useEffect, useCallback } from "react";
import { uniq } from "lodash";
import {
  getAxiosFrame,
  getAxiosFilm,
  getAxiosDirect,
  array,
} from "../server/serverFest";
import { useParams } from "react-router";
import styled from "styled-components";

const CartFilm = styled.div`
  /* min-height: 100vh; */
  padding: 20px;
  max-width: 1366px;
`;

const CartFrame = styled.div`
  margin-top: 100px;
  height: 500px;
  width: 300px;
  background-color: #fff;
  position: relative;
  border-top: 10px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  :after {
    content: "";
    width: 30px;
    height: 1180px;
    display: block;
    background: linear-gradient(
      to top,
      black 2.5%,
      #fff 2.5% 5%,
      black 5% 7.5%,
      #fff 7.5% 10%,
      black 10% 12.5%,
      #fff 12.5% 15%,
      black 15% 17.5%,
      #fff 17.5% 20%,
      black 20% 22.5%,
      #fff 22.5% 25%,
      black 25% 27.5%,
      #fff 27.5% 30%,
      black 30% 32.5%,
      #fff 32.5% 35%,
      black 35% 37.5%,
      #fff 37.5% 40%,
      black 40% 42.5%,
      #fff 42.5% 45%,
      black 45% 47.5%,
      #fff 47.5% 50%,
      black 50% 52.5%,
      #fff 52.5% 55%,
      black 55% 57.5%,
      #fff 57.5% 60%,
      black 60% 62.5%,
      #fff 62.5% 65%,
      black 65% 67.5%,
      #fff 67.5% 70%,
      black 70% 72.5%,
      #fff 72.5% 75%,
      black 75% 77.5%,
      #fff 77.5% 80%,
      black 80% 82.5%,
      #fff 82.5% 85%,
      black 85% 87.5%,
      #fff 87.5% 90%,
      black 90% 92.5%,
      #fff 92.5% 95%,
      black 95% 97.5%,
      #fff 97.5% 100%
    );
    border-right: 5px solid black;
    border-left: 8px solid black;
    position: absolute;
    left: 0;
  }

  :before {
    content: "";
    width: 30px;
    height: 1180px;
    display: block;
    background: linear-gradient(
      to top,
      black 2.5%,
      #fff 2.5% 5%,
      black 5% 7.5%,
      #fff 7.5% 10%,
      black 10% 12.5%,
      #fff 12.5% 15%,
      black 15% 17.5%,
      #fff 17.5% 20%,
      black 20% 22.5%,
      #fff 22.5% 25%,
      black 25% 27.5%,
      #fff 27.5% 30%,
      black 30% 32.5%,
      #fff 32.5% 35%,
      black 35% 37.5%,
      #fff 37.5% 40%,
      black 40% 42.5%,
      #fff 42.5% 45%,
      black 45% 47.5%,
      #fff 47.5% 50%,
      black 50% 52.5%,
      #fff 52.5% 55%,
      black 55% 57.5%,
      #fff 57.5% 60%,
      black 60% 62.5%,
      #fff 62.5% 65%,
      black 65% 67.5%,
      #fff 67.5% 70%,
      black 70% 72.5%,
      #fff 72.5% 75%,
      black 75% 77.5%,
      #fff 77.5% 80%,
      black 80% 82.5%,
      #fff 82.5% 85%,
      black 85% 87.5%,
      #fff 87.5% 90%,
      black 90% 92.5%,
      #fff 92.5% 95%,
      black 95% 97.5%,
      #fff 97.5% 100%
    );
    border-right: 8px solid black;
    border-left: 5px solid black;
    position: absolute;
    right: 0;
  }
`;

const Item = styled.div`
  max-width: 200px;
  /* max-height: 600px; */
  :first-child {
    padding-top: 365px;
  }
  img {
    width: 100%;
    /* max-height: 100%; */
  }
`;

const Cart = () => {
  let { id } = useParams();

  const [frame, setFrame] = useState(null);
  const [film, setFilm] = useState(null);
  const [direct, setDirect] = useState(null);
  const [directId, setDirectId] = useState(null);

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
    setDirectId(directFind(array));
  }, [directFind]);

  useEffect(() => {
    if (directId) {
      getAxiosDirect(directId[1]).then((response) => {
        setDirect(response);
      });
    }
  }, [directId]);

  // console.log(id);
  // console.log("filmCart", film);
  // console.log("idItem", idItem);
  // console.log(direct);

  // console.log("direct", direct);
  // console.log("frame", frame);
  // console.log("film", film);

  if (film && frame && direct) {
    const randomRepeat = (min, max, size) => {
      let values = [];

      while (values.length < size) {
        values.push(Math.floor(Math.random() * (max - min + 1) + min));

        values = uniq(values);
      }

      return values;
    };

    const arrayFrame = randomRepeat(0, frame.length - 3, 8);

    const frameItems = [...Array(8)].map((item, index) => {
      return (
        <Item key={index}>
          <img src={frame[Number(arrayFrame[index])].preview} alt="" />
        </Item>
      );
    });

    return (
      <CartFilm>
        <CartFrame>{frameItems}</CartFrame>
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
