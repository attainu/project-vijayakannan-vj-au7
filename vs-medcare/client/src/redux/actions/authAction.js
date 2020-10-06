import axios from "axios";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";

//super admin
export const superAdminLoignHelper = (data) => {
  return {
    type: "SET_SUPERADMIN_DATA",
    payload: data,
  };
};

//admin
export const adminLoginHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

//user
export const userLoginHelper = (data) => {
  return {
    type: "SET_USERS_DATA",
    payload: data,
  };
};

// login function superadmin | admin | user
export const loginFunction = (userLoginCredentials) => {
  if (userLoginCredentials.role === "superadmin") {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/superadmin/superlogin",
          data: userLoginCredentials,
        });

        const { token } = data;
        localStorage.setItem("userJwtToken", token);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(superAdminLoignHelper(decoded.user));
        //history.push("/allposts");
      } catch (err) {
        dispatch({
          type: "SET_LOGIN_ERRORS",
          payload: err.response.data,
        });
        console.log("Error in userLogin Action", err.message);
      }
    };
  } else if (userLoginCredentials.role === "admin") {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/admin/login",
          data: userLoginCredentials,
        });

        const { token } = data;
        localStorage.setItem("userJwtToken", token);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(adminLoginHelper(decoded.user));
        //history.push("/allposts");
      } catch (err) {
        dispatch({
          type: "SET_LOGIN_ERRORS",
          payload: err.response.data,
        });
        console.log("Error in userLogin Action", err.message);
      }
    };
  } else {
    return async (dispatch) => {
      try {
        const { data } = await axios({
          method: "Post",
          url: "https://vs-medcare.herokuapp.com/api/user/login",
          data: userLoginCredentials,
        });

        const { token } = data;
        localStorage.setItem("userJwtToken", token);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(userLoginHelper(decoded.user));
        //history.push("/allposts");
      } catch (err) {
        dispatch({
          type: "SET_LOGIN_ERRORS",
          payload: err.response.data,
        });
        console.log("Error in userLogin Action", err.message);
      }
    };
  }
};
