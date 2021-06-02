import axios from "axios";

// checking the appoinment date and time
export const appoCheckHelper = (data) => {
  return {
    type: "SET_APPOCHECK_DATA",
    payload: data,
  };
};

// cancelling the appoinment
export const appoCancelHelper = (data) => {
  return {
    type: "SET_APPOCANCEL_DATA",
    payload: data,
  };
};

// checking the appoinment tine and date by user
export const appoCheck = (appoCheckCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/api/user/appoCheck",
        data: appoCheckCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      await alert(data.message);
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_APPOCHECK_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in Appoinment Checking Action", err.message);
    }
  };
};

// cancelling the appoinment by user
export const appoCancel = (appoCancelCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/appoCancel",
        data: appoCancelCredentials,
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
        type: "SET_APPOCANCEL_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in Appoinment cancel Action", err.message);
    }
  };
};
