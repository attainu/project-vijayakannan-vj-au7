import axios from "axios";

//paitent data
export const paitentDataHelper = (data) => {
  return {
    type: "SET_PAITENT_DATA",
    payload: data,
  };
};

//posting the paitent detail for appoinment booking
export const paitentData = (paitentDataCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/appoBook",
        data: paitentDataCredentials,
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
        type: "SET_PAITENTDATA_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in paitent data Action", err.message);
    }
  };
};
