// import updateFilmData from "./filmData";
// import updateFilmCart from "./filmCart";
import updateCart from "./updateCart";
import updateResponsive from "./updateResponsiv";

const reducer = (state, action) => {
  // console.log(action.type);
  return {
    responsive: updateResponsive(state, action),
    cart: updateCart(state, action),
  };
};

export default reducer;
