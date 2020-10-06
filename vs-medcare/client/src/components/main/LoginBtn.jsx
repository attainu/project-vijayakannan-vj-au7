import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { loginFunction } from "../../redux/actions/authAction";

//
const LoginBtn = () => {
  const dispatch = useDispatch();
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
    dispatch(loginFunction({ email, password, role }));
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
              <label for="InputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a
              href="#userLogin"
              data-toggle="modal"
              data-target="#userLogin"
              data-dismiss="modal"
            >
              Forgot Password?
            </a>
            <button type="submit" className="model-main-btn">
              Login
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginBtn;
