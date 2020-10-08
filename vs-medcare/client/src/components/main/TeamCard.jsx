import React from "react";
import Face from "../../images/face-3.jpg";
import { Link } from "react-router-dom";

const TeamCard = () => {
  return (
    <>
      <div className="col-lg-6 mt-4">
        <div className="member">
          <div className="image">
            <img src={Face} className="img-fluid" alt="" />
          </div>
          <div className="member-info">
            <h4>John Doe</h4>
            <span>MS</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="social">
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
