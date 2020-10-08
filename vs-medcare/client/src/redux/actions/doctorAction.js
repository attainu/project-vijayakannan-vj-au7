import axios from "axios";

// adding doctor
export const addDocDataHelper = (data) => {
  return {
    type: "SET_ADDDOC_DATA",
    payload: data,
  };
};

//deleting doctor
export const delDocDataHelper = (data) => {
  return {
    type: "SET_DELDOC_DATA",
    payload: data,
  };
};

//marking leave
export const addDocLeaveHelper = (data) => {
  return {
    type: "SET_ADDDOCLEAVE_DATA",
    payload: data,
  };
};

//marking leave
export const delDocLeaveHelper = (data) => {
  return {
    type: "SET_DELDOCLEAVE_DATA",
    payload: data,
  };
};

//view doctor data
export const viewDocDataHelper = (data) => {
  return {
    type: "SET_VIEWDOC_DATA",
    payload: data,
  };
};

// adding doctor data by super admin
export const addDocData = (addDocDataCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/uploadDoc",
        data: addDocDataCredentials,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });

      dispatch(addDocDataHelper(data));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_ADDDOC_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in add doctor Action", err.message);
    }
  };
};

// deleting the doctor data by super admin
export const delDocData = (delDocDataCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/deleteDoc",
        data: delDocDataCredentials,
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
        type: "SET_DELDOC_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in delete doctor Action", err.message);
    }
  };
};

// Marking the doctor leave by super admin
export const addDocLeave = (addDocDataCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/leaveDoc",
        data: addDocDataCredentials,
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
        type: "SET_ADDDOCLEAVE_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in add doctor leave Action", err.message);
    }
  };
};

// Cancelling the doctor leave by super admin
export const delDocLeave = (delDocLeaveCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/superadmin/leaveDocCancel",
        data: delDocLeaveCredentials,
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
        type: "SET_DELDOCLEAVE_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in delete doctor leave Action", err.message);
    }
  };
};

// Cancelling the doctor leave by super admin
export const viewDocData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "http://localhost:5000/api/public/viewAllDoc",
      });

      dispatch(viewDocDataHelper(data.message));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_VIEWDOCDATA_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in view doctor data Action", err.message);
    }
  };
};
