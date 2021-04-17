const res1300 = (res) => {
  return {
    type: "1300",
    payload: res,
  };
};
const res1100 = (res) => {
  return {
    type: "1100",
    payload: res,
  };
};
const res780 = (res) => {
  return {
    type: "780",
    payload: res,
  };
};
const res480 = (res) => {
  return {
    type: "480",
    payload: res,
  };
};

//////////////////////////////////////

const newFilm = (film) => {
  return {
    type: "FILM",
    payload: film,
  };
};

export { res1300, res1100, res780, res480, newFilm };
