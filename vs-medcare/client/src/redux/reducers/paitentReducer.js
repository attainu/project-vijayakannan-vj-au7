const initialState = {
  paitent: {},
  isAuthenticated: false,
};

const paitentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAITENT_DATA":
      return {
        ...state,
        paitent: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default paitentReducer;
