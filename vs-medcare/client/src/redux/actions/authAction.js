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
//user
export const adminLoginHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

//user
export const userLoginHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

//user logout
const userLogoutHelper = (data) => {
  return {
    type: "DELETE_USER_DATA",
    payload: data,
  };
};

// login function superadmin | admin | user
export const loginFunction = (userLoginCredentials, History) => {
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
        localStorage.setItem("isLogged", true);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(superAdminLoignHelper(decoded.user));
        History.push("/superadmin");
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
        localStorage.setItem("isLogged", true);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(adminLoginHelper(decoded.user));
        History.push("/admin");
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
        localStorage.setItem("isLogged", true);

        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(userLoginHelper(decoded.user));
        History.push("/user");
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

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("userJwtToken");
    localStorage.removeItem("isLogged");
    setAuthToken(false);
  };
};
