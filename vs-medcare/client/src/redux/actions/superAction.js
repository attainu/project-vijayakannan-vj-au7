import axios from "axios";

export const adminDeleteHelper = (data) => {
  return {
    type: "SET_ADMINDELTE_DATA",
    payload: data,
  };
};

// creating the admin account by super admin
export const adminRegister = (adminRegisterCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/adminRegister",
        data: adminRegisterCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });

      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in adminRegister Action", err.message);
    }
  };
};

// deleting the admin account by super admin
export const adminDelete = (adminDeleteCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/adminDelete",
        data: adminDeleteCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });

      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_DELETE_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in admin delete Action", err.message);
    }
  };
};
