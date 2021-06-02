const initialState = {
  admin: {},
  isAuthenticated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN_DATA":
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
      };
    case "SET_ADMINDELETE_DATA":
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default adminReducer;
