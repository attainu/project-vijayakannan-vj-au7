import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { userTokenResend } from "../../../redux/actions/userAction";

const TokenResend = () => {
  const dispatch = useDispatch();
  //model
  const [showTokenResend, setShowTokenResend] = useState(false);
  const handleTokenResendShow = () => setShowTokenResend(true);
  const handleTokenResendClose = () => setShowTokenResend(false);
  //form
  const [email, setEmail] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userTokenResend({ email }));
  };

  return (
    <>
      <Link onClick={handleTokenResendShow} className="main-btn">
        Link Resend
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showTokenResend} onHide={handleTokenResendShow}>
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
                  Resend Account Activation Link
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleTokenResendClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label>Email</label>
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

export default TokenResend;
