import React from "react";
import AddDocLevBtn from "../super/doctor/AddDocLevBtn";
import AddAdminBtn from "../super/admin/AddAdminBtn";
import DelAdminBtn from "../super/admin/DelAdminBtn";
import AddDocBtn from "../super/doctor/AddDocBtn";
import CanDocLevBtn from "../super/doctor/CanDocLevBtn";
import DelDocBtn from "../super/doctor/DelDocBtn";

const SuperCom = (props) => {
  return (
    <>
      <div className="container m-1">
        <div className="row">
          <div className="row justify-content-center">
            <div className="m-3 p-2">
              <div className="col p-1 ">
                <AddAdminBtn />
                <DelAdminBtn />
              </div>
              <div className="col p-1 ">
                <AddDocBtn />
                <DelDocBtn />
                <AddDocLevBtn doctorData={props.doctorData} />
                <CanDocLevBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperCom;
