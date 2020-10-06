import React from "react";
import ContactUpdateBtn from "./user/ContactUpdate";
import ForgotPasswordBtn from "./user/ForgotPassword";
import PasswordUpdateBtn from "./user/PasswordUpdate";
import PostOtpBtn from "./user/PostOtp";

const UserCom = () => {
  return (
    <>
      <div className="mt-5">
        <div id="hero-pg">
          <h5 className="display-4 text-center mt-5 text-white">
            User DashBoard
          </h5>
          <div className="container mt-5">
            <div className="row">
              <div className="mt-5 border">
                <div className="col">
                  <h6 className="text-center text-white"></h6>
                  <h6 className="text-white">Name</h6>
                  <h6 className="text-white">Email</h6>
                  <h6 className="text-white">Contact</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mt-5 p-2 border">
                <div className="col">
                  <ForgotPasswordBtn />
                  <PasswordUpdateBtn />
                  <ContactUpdateBtn />
                  <PostOtpBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCom;
