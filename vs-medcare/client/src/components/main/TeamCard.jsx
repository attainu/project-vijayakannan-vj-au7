import React from "react";
import Face from "../../images/face-3.jpg";
import { Link } from "react-router-dom";

const TeamCard = () => {
  return (
    <>
      <div class="col-lg-6 mt-4">
        <div class="member">
          <div class="image">
            <img src={Face} class="img-fluid" alt="" />
          </div>
          <div class="member-info">
            <h4>John Doe</h4>
            <span>MS</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="social">
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="">
                {" "}
                <i class="fab fa-linkedin"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
