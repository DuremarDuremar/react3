import React from "react";
import { useParams } from "react-router";

const Cart = () => {
  let { id } = useParams();
  return <div>id: {id}</div>;
};

export default Cart;
