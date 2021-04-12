import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";

const CartFilm = styled.div`
  min-height: 100vh;
`;

const Cart = ({ film }) => {
  let { id } = useParams();

  if (film) {
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

const mapStateToProps = ({ cart: { film } }) => {
  return { film };
};

export default connect(mapStateToProps)(Cart);
