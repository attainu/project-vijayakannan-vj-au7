import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { userRegister } from "../../redux/actions/userAction";
import LoginBtn from "./LoginBtn";

//
const SignupBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpShow = () => setShowSignUp(true);
  const handleSignUpClose = () => setShowSignUp(false);
  //form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    //console.log(name, email, contact, password);
    dispatch(userRegister({ name, email, contact, password }));
  };

  return (
    <>
      <Link onClick={handleSignUpShow} className="main-btn">
        signup
      </Link>

      {/* ==============Sign-up-model================ */}

      <Modal show={showSignUp} onHide={handleSignUpShow}>
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
                <Modal.Title className="align-self-center">Sign Up</Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleSignUpClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="model-body-bg">
              <div className="form-group">
                <label for="InputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  placeholder="Enter fullname"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                <label>Contact</label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="form-control"
                  placeholder="Enter contact number"
                  required
                  onChange={(e) => setContact(e.target.value)}
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
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <LoginBtn />
                </div>
                <div className="col">
                  <button type="submit" className="model-main-btn">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupBtn;
