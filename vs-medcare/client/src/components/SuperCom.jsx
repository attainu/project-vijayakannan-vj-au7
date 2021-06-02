import React from "react";
import AddDocLevBtn from "./super/doctor/AddDocLevBtn";
import AddAdminBtn from "./super/admin/AddAdminBtn";
import DelAdminBtn from "./super/admin/DelAdminBtn";
import AddDocBtn from "./super/doctor/AddDocBtn";
import CanDocLevBtn from "./super/doctor/CanDocLevBtn";
import DelDocBtn from "./super/doctor/DelDocBtn";

const SuperCom = () => {
  return (
    <>
      <div className="mt-5">
        <div id="hero-pg">
          <h5 className="display-4 text-center mt-5 text-white">
            Super Admin DashBoard
          </h5>
          <div className="container mt-5">
            <div className="row">
              <div className="mt-5 p-2 border">
                <div className="col">
                  <h6 className="text-center text-white">Admin Operations</h6>
                  <AddAdminBtn />
                  <DelAdminBtn />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mt-5 p-2 border">
                <div className="col">
                  <h6 className="text-center text-white">Doctor Operations</h6>
                  <AddDocBtn />
                  <DelDocBtn />
                  <AddDocLevBtn />
                  <CanDocLevBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperCom;
