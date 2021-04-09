const updateResponsive = (state, action) => {
  if (state === undefined) {
    return {
      1000: true,
    };
  }

  switch (action.type) {
    case "1000":
      return {
        ...state.responsive,
        1000: action.payload,
      };

    default:
      return state.responsive;
  }
};

export default updateResponsive;
