import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import SuperCom from "../components/com/SuperCom";
import { superAdminHomeData } from "../redux/actions/homeAction";

const Super = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.homeRoot);
  const History = useHistory();
  useEffect(() => {
    dispatch(superAdminHomeData());
  }, []);
  return (
    <div>
      {store.isSuper ? (
        <div>
          <Navbar isLoged={true} />
          <div class="container" id="hero-pg">
            <div className="text-center">
              <h1 className="display-6 dash-title mt-5 ">
                SUPERADMIN DASHBOARD
              </h1>
            </div>
            <SuperCom doctorData={store.doctor} />
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

export default Super;
