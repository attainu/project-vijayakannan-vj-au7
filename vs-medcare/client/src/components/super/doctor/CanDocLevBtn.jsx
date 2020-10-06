import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { delDocLeave } from "../../../redux/actions/doctorAction";

//
const CanDocLevBtn = () => {
  const dispatch = useDispatch();
  //model
  const [ShowCanDocLev, setShowCanDocLev] = useState(false);
  const handleCanDocLevShow = () => setShowCanDocLev(true);
  const handleCanDocLevClose = () => setShowCanDocLev(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [dateData, setDateData] = useState("");
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    //console.log(name, department, dateData);
    dispatch(delDocLeave({ name, department, dateData }));
  };

  return (
    <>
      <Link onClick={handleCanDocLevShow} className="main-btn">
        Cancel Leave
      </Link>
      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={ShowCanDocLev} onHide={handleCanDocLevShow}>
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
                  onClick={handleCanDocLevClose}
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
                id="InputDocName"
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
                id="InputDepartment"
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
                id="InputDate"
                placeholder="Enter date"
                required
                onChange={(e) => setDateData(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="model-main-btn">
            Cancel Leave
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CanDocLevBtn;
