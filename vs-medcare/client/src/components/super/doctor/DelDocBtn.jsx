import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { delDocData } from "../../../redux/actions/doctorAction";

//
const DelDocBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showDelDoc, setShowDelDoc] = useState(false);
  const handleDelDocShow = () => setShowDelDoc(true);
  const handleDelDocClose = () => setShowDelDoc(false);
  //form
  const [email, setEmail] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(delDocData({ email }));
  };

  return (
    <>
      <Link onClick={handleDelDocShow} className="main-btn">
        Delete Doctor Detail
      </Link>

      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={showDelDoc} onHide={handleDelDocShow}>
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
                  Delete Doctor Detail
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleDelDocClose}
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
              Delete Doctor
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DelDocBtn;
