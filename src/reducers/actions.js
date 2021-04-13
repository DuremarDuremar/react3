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

const newId = (id) => {
  return {
    type: "ID",
    payload: id,
  };
};

export { res1100, res780, res480, newFilm, newId };
