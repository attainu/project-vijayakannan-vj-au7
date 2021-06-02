const initialState = {
  user: {},
  admin: {},
  superadmin: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "SET_ADMIN_DATA":
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
      };
    case "SET_SUPERADMIN_DATA":
      return {
        ...state,
        superadmin: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
