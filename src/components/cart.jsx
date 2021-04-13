import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";

const CartFilm = styled.div`
  min-height: 100vh;
`;

const Cart = ({ film, idItem }) => {
  let { id } = useParams();

  console.log("filmCart", film);
  console.log("idItem", idItem);

  if (film && idItem) {
    return (
      <CartFilm>
        <div>
          {film.nameEn}
          {film.nameRu}
        </div>
        <div>{film.year}</div>
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
