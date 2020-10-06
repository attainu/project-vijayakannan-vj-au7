import { combineReducers } from "redux";
import superAdminReducer from "./superAdminReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";
//import errorReducer from "./errorReducer";

export default combineReducers({
  superAdminReducer: superAdminReducer,
  adminReducer: adminReducer,
  userReducer: userReducer,
  doctorReducer: doctorReducer,

  //errorRoot: errorReducer,
});
