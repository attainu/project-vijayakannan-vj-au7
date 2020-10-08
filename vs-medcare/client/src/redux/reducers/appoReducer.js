const initialState = {
  appo: {},
  isAuthenticated: false,
};

const appoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APPOCHECK_DATA":
      return {
        ...state,
        appo: action.payload,
        isAuthenticated: true,
      };
    case "SET_APPOCANCEL_DATA":
      return {
        ...state,
        appo: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default appoReducer;
