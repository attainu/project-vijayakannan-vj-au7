import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { adminRegister } from "../../../redux/actions/superAction";

const AddAdminBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const handleAddAdminShow = () => setShowAddAdmin(true);
  const handleAddAdminClose = () => setShowAddAdmin(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(adminRegister({ name, department, email, contact, password }));
  };

  return (
    <>
      <Link onClick={handleAddAdminShow} className="main-btn">
        Add Admin
      </Link>

      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={showAddAdmin} onHide={handleAddAdminShow}>
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
                  Add Department Admin
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAddAdminClose}
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Department"
                required
                onChange={(e) => setDepartment(e.target.value)}
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
            <button type="submit" className="model-main-btn">
              Add Department Admin
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAdminBtn;
