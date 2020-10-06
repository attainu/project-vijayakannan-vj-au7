import axios from "axios";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";

//update password
export const adminUpdatePasswordHelper = (data) => {
  return {
    type: "SET_ADMIN_DATA",
    payload: data,
  };
};

//password update
export const adminUpdatePassword = (
  adminUpdatePasswordCredentials,
  history
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/admin/updatePassword",
        data: adminUpdatePasswordCredentials,
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
        type: "SET_ADMINUPDATEPASSWORD_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in admin update password Action", err.message);
    }
  };
};

//forgot possword
export const adminForgotPassword = (
  adminForgotPasswordCredentials,
  history
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/admin/forgotPassword",
        data: adminForgotPasswordCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_ADMINFORGOTPASSWORD_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in admin forgot password Action", err.message);
    }
  };
};

//post otp to update new password
export const adminPostOtp = (adminPostOtpCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/admin/postOTP",
        data: adminPostOtpCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_ADMINPOSTOTP_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in admin post otp Action", err.message);
    }
  };
};

//admin token resend
export const adminTokenResend = (adminTokenResendCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/admin/resendToken",
        data: adminTokenResendCredentials,
      });
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_ADMINTOKENRESEND_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in admin resend token Action", err.message);
    }
  };
};
