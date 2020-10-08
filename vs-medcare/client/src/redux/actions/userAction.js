import axios from "axios";

//forgot password
export const userForgotPasswordHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};
//post otp
export const userPostOtpHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};
//update password
export const userUpdatePasswordHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};
//update contact
export const userUpdateContactHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};
//delete account
export const userDeleteAccountHelper = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

//user register to the website
export const userRegister = (userRegisterCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/register",
        data: userRegisterCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_REGISTER_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in userRegister Action", err.message);
    }
  };
};

//forgot possword
export const userForgotPassword = (userForgotPasswordCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/forgotPassword",
        data: userForgotPasswordCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_USERFORGOTPASSWORD_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user forgot password Action", err.message);
    }
  };
};

//post otp to update new password
export const userPostOtp = (userPostOtpCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/postOTP",
        data: userPostOtpCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_USERPOSTOTP_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user post otp Action", err.message);
    }
  };
};

//password update
export const userUpdatePassword = (userUpdatePasswordCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/updatePassword",
        data: userUpdatePasswordCredentials,
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
        type: "SET_USERUPDATEPASSWORD_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user update password Action", err.message);
    }
  };
};

//update contact
export const userUpdateContact = (userUpdateContactCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/contactUpdate",
        data: userUpdateContactCredentials,
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
        type: "SET_USERUPDATECONTACT_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user update contact Action", err.message);
    }
  };
};

//user token resend
export const userTokenResend = (userTokenResendCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/resendToken",
        data: userTokenResendCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_USERTOKENRESEND_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user resend token Action", err.message);
    }
  };
};

//delete user account
export const userDeleteAccount = (userDeleteAccountCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/user/userDelete",
        data: userDeleteAccountCredentials,
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
        type: "SET_USERDELETEACCOUNT_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in user delete account Action", err.message);
    }
  };
};
