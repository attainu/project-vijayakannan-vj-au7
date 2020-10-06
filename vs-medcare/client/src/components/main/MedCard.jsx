import React from "react";
import { Link } from "react-router-dom";
import camp from "../../images/camp5.jpg";

const MedCard = () => {
  return (
    <>
      <div class="col-lg-3 col-sm-6 col-xs-12">
        <div class="card card-block">
          <img src={camp} alt="" />
          <div class="camp-text">
            <div>
              <h3 class="card-title">Lorem Ipsum Dolor</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedCard;
