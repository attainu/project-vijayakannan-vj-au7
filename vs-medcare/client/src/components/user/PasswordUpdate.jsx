import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { userUpdatePassword } from "../../redux/actions/userAction";

const PasswordUpdateBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const handlePasswordUpdateShow = () => setShowPasswordUpdate(true);
  const handlePasswordUpdateClose = () => setShowPasswordUpdate(false);
  //form
  const [email, setEmail] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmnewpassword, setConfirmNewPassword] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userUpdatePassword({
        email,
        oldpassword,
        newpassword,
        confirmnewpassword,
      })
    );
  };

  return (
    <>
      <Link onClick={handlePasswordUpdateShow} class="main-btn">
        Update Password
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showPasswordUpdate} onHide={handlePasswordUpdateShow}>
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
                  Password Update
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={handlePasswordUpdateClose}
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
              <label for="InputPassword">Old Password</label>
              <input
                type="text"
                class="form-control"
                id="InputPassword"
                placeholder="Enter password"
                required
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputNewPassword">New Password</label>
              <input
                type="password"
                class="form-control"
                id="InputNewPassword"
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
                id="InputNewPassword"
                placeholder="Confirm new password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
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

export default PasswordUpdateBtn;
