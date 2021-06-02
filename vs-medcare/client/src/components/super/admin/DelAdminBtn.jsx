import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { adminDelete } from "../../../redux/actions/superAction";

const DelAdminBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showDelAdmin, setShowDelAdmin] = useState(false);
  const handleDelAdminShow = () => setShowDelAdmin(true);
  const handleDelAdminClose = () => setShowDelAdmin(false);
  //form
  const [email, setEmail] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(adminDelete({ email }));
  };

  return (
    <>
      <Link onClick={handleDelAdminShow} className="main-btn">
        Delete Admin
      </Link>

      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={showDelAdmin} onHide={handleDelAdminShow}>
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
                  Delete Department Admin
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleDelAdminClose}
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
              Delete Department Admin
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DelAdminBtn;
