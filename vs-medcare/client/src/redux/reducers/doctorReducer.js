const initialState = {
  doctor: {},
  isAuthenticated: false,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADDDOC_DATA":
      return {
        ...state,
        doctor: action.payload,
        isAuthenticated: true,
      };
    case "SET_DELDOC_DATA":
      return {
        ...state,
        doctor: action.payload,
        isAuthenticated: true,
      };
    case "SET_ADDDOCLEAVE_DATA":
      return {
        ...state,
        doctor: action.payload,
        isAuthenticated: true,
      };
    case "SET_DELDOCLEAVE_DATA":
      return {
        ...state,
        doctor: action.payload,
        isAuthenticated: true,
      };
    case "SET_VIEWDOC_DATA":
      return {
        ...state,
        doctor: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default doctorReducer;
