import React from "react";
import AddDocLevBtn from "../../components/super/doctor/AddDocLevBtn";
import AddDocBtn from "../../components/super/doctor/AddDocBtn";
import CanDocLevBtn from "../../components/super/doctor/CanDocLevBtn";
import DelDocBtn from "../../components/super/doctor/DelDocBtn";

const DoctorCom = () => {
  return (
    <>
      <div className="col-lg-4 text-lg-left">
        <AddDocBtn />
        <DelDocBtn />
        <AddDocLevBtn />
        <CanDocLevBtn />
      </div>
    </>
  );
};

export default DoctorCom;
