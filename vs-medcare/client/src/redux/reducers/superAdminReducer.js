const initialState = {
  superadmin: {},
  isAuthenticated: false,
};

const superAdminReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default superAdminReducer;
