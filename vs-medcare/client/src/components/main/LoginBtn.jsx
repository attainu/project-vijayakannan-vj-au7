import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { loginFunction } from "../../redux/actions/authAction";
import ForgotPasswordBtn from "../user/user/ForgotPassword";
import TokenResend from "../user/user/TokenResend";
import SignupBtn from "../main/SignupBtn";
import PostOtp from "../user/user/PostOtp";

//
const LoginBtn = () => {
  const store = useSelector((store) => store.authRoot);

  const dispatch = useDispatch();
  const History = useHistory();

  //model
  const [showSignIn, setShowSignIn] = useState(false);
  const handleSignInShow = () => setShowSignIn(true);
  const handleSignInClose = () => setShowSignIn(false);
  //form
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(role, email, password);
    dispatch(loginFunction({ email, password, role }, History));

    setTimeout(() => {
      const log = localStorage.getItem("isLogged");
      if (log == null) {
        toast.info("Invalid Login !");
      }
    }, 10000);
  };

  return (
    <>
      <Link onClick={handleSignInShow} className="main-btn">
        Login
      </Link>

      {/* ==============Login-in--model================ */}

      <Modal show={showSignIn} onHide={handleSignInShow}>
        <Modal.Header>
          <div className="container">
            <div className="row">
              {/* ============================== */}
              <div className="col-3">
                <img
                  className="image-fulid justify-content-start align-items-center"
                  style={{ width: "100px" }}
                  src={logo}
                  alt="vs-med-care-logo"
                />
              </div>
              {/* ============================== */}
              <div className="col-7 mt-2 text-center">
                <Modal.Title className="align-self-center">Login</Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleSignInClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <label>Role</label> &ensp;
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="superadmin"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">SuperAdmin</label>
              &ensp;
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="admin"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">Admin</label>
              &ensp;
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="user"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label">User</label>
            </div>
            <hr />
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-2">
                  <SignupBtn />
                </div>
                <div className="col-xs-2">
                  <button type="submit" className="model-main-btn">
                    Login
                  </button>
                </div>
                <div className="col-xs-2">
                  <PostOtp />
                </div>
                <div className="col-xs-2">
                  <TokenResend />
                </div>
                <div className="col-xs-2">
                  <ForgotPasswordBtn />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default LoginBtn;
