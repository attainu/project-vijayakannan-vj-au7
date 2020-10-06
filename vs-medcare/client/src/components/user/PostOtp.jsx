import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { userPostOtp } from "../../redux/actions/userAction";

const PostOtpBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showPostOtp, setShowPostOtp] = useState(false);
  const handlePostOtpShow = () => setShowPostOtp(true);
  const handlePostOtpClose = () => setShowPostOtp(false);
  //form
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmnewpassword, setConfirmNewPassword] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userPostOtp({ email, otp, newpassword, confirmnewpassword }));
  };

  return (
    <>
      <Link onClick={handlePostOtpShow} class="main-btn">
        Post OTP
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showPostOtp} onHide={handlePostOtpShow}>
        <Modal.Header>
          <div class="container">
            <div class="row">
              {/* ============================== */}
              <div class="col-3">
                <img
                  class="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">
                  Post OTP
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={handlePostOtpClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div class="form-group">
              <label for="InputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputOtp">OTP</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter six digit OTP"
                required
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputNewPassword">New Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter new password"
                required
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputNewPassword">Conform Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Confirm new password"
                required
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <button type="submit" class="model-main-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostOtpBtn;
