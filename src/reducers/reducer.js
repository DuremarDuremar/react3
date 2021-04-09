// import updateFilmData from "./filmData";
// import updateFilmCart from "./filmCart";
// import updateFilmLog from "./filmLog";
import updateResponsive from "./updateResponsiv";

const reducer = (state, action) => {
  // console.log(action.type);
  return {
    responsive: updateResponsive(state, action),
  };
};

export default reducer;
