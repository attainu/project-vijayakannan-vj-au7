import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../images/head-logo-1.png";
import { paitentData } from "../../../../redux/actions/paitentAction";

const PaitentDataBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showPaitentData, setShowPaitentData] = useState(false);
  const handlePaitentDataShow = () => setShowPaitentData(true);
  const handlePaitentDataClose = () => setShowPaitentData(false);
  //form
  const [pname, setPname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      paitentData({
        pname,
        gender,
        email,
        dob,
        contact,
        msg,
      })
    );
  };

  return (
    <>
      <Link onClick={handlePaitentDataShow} className="main-btn">
        Add Paitent Detail
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showPaitentData} onHide={handlePaitentDataShow}>
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
                  Add Paitent Detail
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handlePaitentDataClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter fullname"
                required
                onChange={(e) => setPname(e.target.value)}
              />
            </div>
            <label for="InputGender">Gender</label> &ensp;
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label">Male</label>
              &ensp;
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date of birth"
                required
                onChange={(e) => setDob(e.target.value)}
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
                pattern="{0-9}{10}"
                className="form-control"
                placeholder="Enter contact number"
                required
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <input
                type="textarea"
                className="form-control"
                placeholder="Enter Message"
                onChange={(e) => setMsg(e.target.value)}
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

export default PaitentDataBtn;
