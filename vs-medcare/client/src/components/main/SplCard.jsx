import React from "react";
import { Link } from "react-router-dom";

const SplCard = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div className="service shadow">
          <div className="icon">
            <i className="fas fa-allergies"></i>
          </div>
          <h4>
            <Link to="#">Insurance Support</Link>
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            quam optio esse earum voluptatibus repellat?
          </p>
        </div>
      </div>
    </>
  );
};

export default SplCard;
