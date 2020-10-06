import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// import $ from "jquery";
import logo from "../../../images/head-logo-1.png";
import { addDocLeave } from "../../../redux/actions/doctorAction";

const AddDocLevBtn = () => {
  const dispatch = useDispatch();
  //model
  const [showAddDocLev, setShowAddDocLev] = useState(false);
  const handleAddDocLevShow = () => setShowAddDocLev(true);
  const handleAddDocLevClose = () => setShowAddDocLev(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [dateData, setDateData] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let currentDate = new Date().toLocaleDateString();
    console.log(currentDate);
    // if (dateData > currentDate) {

    // }
    console.log(name, department, dateData);
    dispatch(addDocLeave({ name, department, dateData }));
  };

  return (
    <>
      <Link onClick={handleAddDocLevShow} className="main-btn">
        Mark Leave
      </Link>

      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={showAddDocLev} onHide={handleAddDocLevShow}>
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
                  Doctor Leave Cancel
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAddDocLevClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label for="InputDocName">Doctor name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Doctor name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label for="InputDepartment">Department</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Department"
                required
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="InputDate">Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date"
                required
                onChange={(e) => setDateData(e.target.value)}
              />
            </div>
            <button type="submit" className="model-main-btn">
              Mark Leave
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDocLevBtn;
