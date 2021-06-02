import axios from "axios";

// sending the feedback to the hospital
export const publicFeedback = (feedbackCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "https://vs-medcare.herokuapp.com/api/public/feedback",
        data: feedbackCredentials,
      });

      await alert(data.message);
      // dispatch(registerLoaderFlagHelper(true));
      // history.push("/");
    } catch (err) {
      dispatch({
        type: "SET_FEEDBACK_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in feedback Action", err.message);
    }
  };
};
