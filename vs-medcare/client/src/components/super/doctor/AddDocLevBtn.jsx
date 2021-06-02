import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import "react-datepicker/dist/react-datepicker.css";
import { addDocLeave } from "../../../redux/actions/doctorAction";

const AddDocLevBtn = (props) => {
  //console.log(props.doctorData);
  const dispatch = useDispatch();
  //model
  const [showAddDocLev, setShowAddDocLev] = useState(false);
  const handleAddDocLevShow = () => setShowAddDocLev(true);
  const handleAddDocLevClose = () => setShowAddDocLev(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  //datepicker
  const [date, setDate] = useState(null);
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, department, date);
    dispatch(addDocLeave({ name, department, date }));
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
                  Doctor Leave Marking
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
              <label>Doctor</label>
              <select
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              >
                {props.doctorData.map((doc) => (
                  <option value={doc.name}>{doc.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Department</label>
              <select
                className="form-control"
                onChange={(e) => setDepartment(e.target.value)}
              >
                {props.doctorData.map((doc) => (
                  <option value={doc.department}>{doc.department}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date"
                required
                onChange={(e) => setDate(e.target.value)}
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
