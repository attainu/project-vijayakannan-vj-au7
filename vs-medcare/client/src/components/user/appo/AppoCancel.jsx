import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { appoCancel } from "../../../redux/actions/appoAction";

const AppoCancel = () => {
  const dispatch = useDispatch();
  //model
  const [showAppoCancel, setShowAppoCancel] = useState(false);
  const handleAppoCancelShow = () => setShowAppoCancel(true);
  const handleAppoCancelClose = () => setShowAppoCancel(false);
  //form
  const [appoId, setAppoId] = useState("");
  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(appoCancel({ appoId }));
  };

  return (
    <>
      <Link onClick={handleAppoCancelShow} className="main-btn">
        cancel appoinament
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showAppoCancel} onHide={handleAppoCancelShow}>
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
                  Appoinment Cancel
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAppoCancelClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label>Appoinment ID</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter six digit appoinment id"
                pattern="[0-9]{6}"
                required
                onChange={(e) => setAppoId(e.target.value)}
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

export default AppoCancel;
