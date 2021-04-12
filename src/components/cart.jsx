import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Cart = ({ film }) => {
  let { id } = useParams();

  if (film) {
    return (
      <>
        <div>{film.year}</div>
      </>
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
