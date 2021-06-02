import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import PublicDocCom from "../components/com/PublicDocCom";
import { viewDocData } from "../redux/actions/doctorAction";

const Doctor = () => {
  const store = useSelector((store) => store.doctorRoot);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewDocData());
  }, []);
  return (
    <>
      <Navbar />
      <div class="container">
        <h1 class="display-5 text-center mt-5 pt-5 mb-2">OUR DOCTORS</h1>
        <div class="row row-cols-1 row-cols-md-3">
          <PublicDocCom doc={store.doctor} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctor;
