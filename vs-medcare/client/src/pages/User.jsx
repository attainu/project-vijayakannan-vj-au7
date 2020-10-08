import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import UserCom from "../components/com/UserCom";
import { userHomeData } from "../redux/actions/homeAction";

const User = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.homeRoot);
  const History = useHistory();
  useEffect(() => {
    dispatch(userHomeData());
  }, []);

  return (
    <div>
      {store.isUser ? (
        <div>
          <Navbar isLoged={true} />
          <div class="container" id="hero-pg">
            <div className="text-center">
              <h1 className="display-6 dash-title mt-5 ">USER DASHBOARD</h1>
            </div>
            <UserCom />
          </div>
          <Footer />
        </div>
      ) : store.isError ? (
        History.push("/")
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
};

export default User;
