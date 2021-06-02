import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/head-logo-1.png";
import { adminForgotPassword } from "../../redux/actions/adminAction";

const ForgotPasswordBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleForgotPasswordShow = () => setShowForgotPassword(true);
  const handleForgotPasswordClose = () => setShowForgotPassword(false);
  //form
  const [email, setEmail] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(adminForgotPassword({ email }));
  };

  return (
    <>
      <Link onClick={handleForgotPasswordShow} className="main-btn">
        Forgot Password
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showForgotPassword} onHide={handleForgotPasswordShow}>
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
                <Modal.Title className="align-self-center">
                  Forgot Password
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleForgotPasswordClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
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
            <button type="submit" className="model-main-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForgotPasswordBtn;
