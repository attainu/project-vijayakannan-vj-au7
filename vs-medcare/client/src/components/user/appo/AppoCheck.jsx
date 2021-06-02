import React, { useState } from "react";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { appoCheck } from "../../../redux/actions/appoAction";

const AppoCheck = () => {
  const dispatch = useDispatch();
  //model
  const [showAppoCheck, setShowAppoCheck] = useState(false);
  const handleAppoCheckShow = () => setShowAppoCheck(true);
  const handleAppoCheckClose = () => setShowAppoCheck(false);
  //form
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [appoDate, setAppoDate] = useState("");
  const [appoTimeSloat, setAppoTimeSloat] = useState("");

  //from handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, department, appoDate, appoTimeSloat);
    dispatch(
      appoCheck({
        name,
        department,
        appoDate,
        appoTimeSloat,
      })
    );
  };

  return (
    <>
      <Link onClick={handleAppoCheckShow} className="main-btn">
        Book Appoinment
      </Link>

      {/* ==============password-update--model================ */}

      <Modal show={showAppoCheck} onHide={handleAppoCheckShow}>
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
                  Book Appoinment
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div className="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAppoCheckClose}
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
                placeholder="Enter doctor name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Depatment</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter department"
                required
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Appoiment Date</label>
              <input
                type="date"
                className="form-control"
                required
                onChange={(e) => setAppoDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Time Sloat</label>
              <select
                className="form-control"
                onChange={(e) => setAppoTimeSloat(e.target.value)}
              >
                <option value="#">00:00 - 00:00</option>
                <option value="08:00am-08:30am">08:00am - 08:30am</option>
                <option value="09:00am-09:30am">09:00am - 09:30am</option>
                <option value="11:00am-11:30am">11:00am - 11:30am</option>
                <option value="12:00pm-12:30pm">12:00pm - 12:30pm</option>
                <option value="01:00pm-01:30pm">01:00pm - 01:30pm</option>
                <option value="03:00pm-03:30pm">03:00pm - 03:30pm</option>
                <option value="04:00pm-04:30pm">04:00pm - 04:30pm</option>
                <option value="05:00pm-05:30pm">05:00pm - 05:30pm</option>
              </select>
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

export default AppoCheck;
