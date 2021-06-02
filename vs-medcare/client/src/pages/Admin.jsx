import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import AdminCom from "../components/com/AdminCom";
import { adminHomeData } from "../redux/actions/homeAction";

const Admin = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.homeRoot);
  const History = useHistory();
  useEffect(() => {
    dispatch(adminHomeData());
  }, []);
  return (
    <div>
      {store.isAdmin ? (
        <div>
          <Navbar isLoged={true} />
          <div class="container" id="hero-pg">
            <div className="text-center">
              <h1 class="display-5 dash-title mt-5">ADMIN DASHBOARD</h1>
            </div>
            <AdminCom />
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

export default Admin;
