import axios from "axios";

// setting the token to the header once the user is loged in.
const setAuthToken = (token) => {
  console.log(token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
