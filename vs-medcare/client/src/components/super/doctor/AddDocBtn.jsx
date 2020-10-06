import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/head-logo-1.png";
import { addDocData } from "../../../redux/actions/doctorAction";

const AddDocBtn = () => {
  const dispatch = useDispatch();
  //moel
  const [showAddDoc, setShowAddDoc] = useState(false);
  const handleAddDocShow = () => setShowAddDoc(true);
  const handleAddDocClose = () => setShowAddDoc(false);
  //form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  //image handler
  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setFile(img);
    }
  };
  //form handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("department", department);
    formData.append("description", description);
    console.log(name, email, department, description, file);
    dispatch(addDocData(formData));
  };

  return (
    <>
      <Link onClick={handleAddDocShow} class="main-btn">
        Add Doctor
      </Link>

      {/* ==============Doctor-leave-cancel-model================ */}

      <Modal show={showAddDoc} onHide={handleAddDocShow}>
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
                  Add Doctor Detail
                </Modal.Title>
              </div>
              {/* ============================== */}
              <div class="col-1">
                <Modal.Header
                  closeButton
                  onClick={handleAddDocClose}
                ></Modal.Header>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="ModelBody">
          <form onSubmit={formSubmitHandler}>
            <div class="form-group">
              <label for="InputName">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputDepartment">Department</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter department"
                required
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="InputDesc">Description</label>
              <textarea
                type="text"
                rows="3"
                class="form-control"
                placeholder="Enter description"
                required
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="InputDocImage">Doctor Image</label>
              <input
                type="file"
                class="form-control-file"
                placeholder="Upload Image"
                // accept=".gif,.jpg,.jpeg,.png"
                required
                onChange={imageHandler}
              />
            </div>
            <button type="submit" class="model-main-btn">
              Add Doctor
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDocBtn;
