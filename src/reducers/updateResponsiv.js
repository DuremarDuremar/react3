const updateResponsive = (state, action) => {
  if (state === undefined) {
    return {
      r1300: true,
      r1100: true,
      r780: true,
      r480: true,
    };
  }

  switch (action.type) {
    case "1300":
      return {
        ...state.responsive,
        r1300: action.payload,
      };
    case "1100":
      return {
        ...state.responsive,
        r1100: action.payload,
      };
    case "780":
      return {
        ...state.responsive,
        r780: action.payload,
      };
    case "480":
      return {
        ...state.responsive,
        r480: action.payload,
      };
    default:
      return state.responsive;
  }
};

export default updateResponsive;
