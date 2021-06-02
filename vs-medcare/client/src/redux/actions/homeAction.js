import axios from "axios";

//user data
export const userHomeDataHelper = (data) => {
  return {
    type: "SET_USERHOME_DATA",
    payload: data,
  };
};

//admin data
export const adminHomeDataHelper = (data) => {
  return {
    type: "SET_ADMINHOME_DATA",
    payload: data,
  };
};

//super admin data
export const superAdminHomeDataHelper = (data) => {
  return {
    type: "SET_SUPERADMINHOME_DATA",
    payload: {
      superadmin: data.superData,
      doctor: data.doctorData,
      admin: data.adminData,
    },
  };
};

// user home
export const userHomeData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "http://localhost:5000/api/home/user/home",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(userHomeDataHelper(data.message));
    } catch (err) {
      dispatch({
        type: "SET_USERHOMEDATA_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user home data Action", err.message);
    }
  };
};

// admin home
export const adminHomeData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "http://localhost:5000/api/home/admin/home",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(adminHomeDataHelper(data.message));
    } catch (err) {
      dispatch({
        type: "SET_ADMINHOMEDATA_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in admin home data Action", err.message);
    }
  };
};

// super admin home
export const superAdminHomeData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: "http://localhost:5000/api/home/superadmin/home",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("userJwtToken"),
        },
      });
      dispatch(superAdminHomeDataHelper(data));
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SET_SUPERADMINHOMEDATA_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in super admin home data Action", err.message);
    }
  };
};
