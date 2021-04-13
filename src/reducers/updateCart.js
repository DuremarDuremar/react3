const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      film: null,
      idItem: null,
    };
  }

  // console.log(state);

  switch (action.type) {
    case "FILM":
      return {
        ...state.cart,
        film: action.payload,
      };
    case "ID":
      return {
        ...state.cart,
        idItem: action.payload,
      };
    default:
      return state.cart;
  }
};

export default updateCart;
