import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { userDeleteAccount } from "../../redux/actions/userAction";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  //model
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const handleDeleteAccountShow = () => setShowDeleteAccount(true);
  const handleDeleteAccountClose = () => setShowDeleteAccount(false);
  //form
  const [email, setEmail] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(userDeleteAccount({ email }));
  };

  return (
    <>
      <Link onClick={handleDeleteAccountShow} className="main-btn">
        Delete Account
      </Link>

      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={showDeleteAccount} onHide={handleDeleteAccountShow}>
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
                  onClick={handleDeleteAccountClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label for="InputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="model-main-btn">
              Delete Account
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteAccount;
