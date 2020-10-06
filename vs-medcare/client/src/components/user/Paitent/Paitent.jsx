import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";

const PaitentDataBtn = () => {
  const [showPaitentData, setShowPaitentData] = useState(false);

  const handlePaitentDataClose = () => setShowPaitentData(false);
  const handlePaitentDataShow = () => setShowPaitentData(true);

  return (
    <>
      <Link onClick={handlePaitentDataShow} class="main-btn">
        Add Paitent Detail
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showPaitentData} onHide={handlePaitentDataShow}>
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
                  Add Paitent Detail
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={handlePaitentDataClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form>
            <div class="form-group">
              <label for="InputName">Name</label>
              <input
                type="text"
                class="form-control"
                id="InputName"
                placeholder="Enter fullname"
                required
              />
            </div>
            <label for="InputGender">Gender</label> &ensp;
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
              &ensp;
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div class="form-group">
              <label for="InputDob">Date of Birth</label>
              <input
                type="date"
                class="form-control"
                id="InputDob"
                placeholder="Enter date of birth"
                required
              />
            </div>
            <div class="form-group">
              <label for="InputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="form-group">
              <label for="InputContact">Contact</label>
              <input
                type="tel"
                pattern="{0-9}{10}"
                class="form-control"
                id="InputContact"
                placeholder="Enter contact number"
                required
              />
            </div>
            <div class="form-group">
              <label for="InputMessage">Message</label>
              <input
                type="textarea"
                class="form-control"
                id="InputMessage"
                placeholder="Enter Message"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" class="model-main-btn">
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PaitentDataBtn;
