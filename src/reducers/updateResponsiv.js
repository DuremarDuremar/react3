const updateResponsive = (state, action) => {
  if (state === undefined) {
    return {
      r1100: true,
    };
  }

  switch (action.type) {
    case "1100":
      return {
        ...state.responsive,
        r1100: action.payload,
      };

    default:
      return state.responsive;
  }
};

export default updateResponsive;
