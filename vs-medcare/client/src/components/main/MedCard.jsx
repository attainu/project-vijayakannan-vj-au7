import React from "react";
import camp from "../../images/camp5.jpg";

const MedCard = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="card card-block">
          <img src={camp} alt="" />
          <div className="camp-text">
            <div>
              <h3 className="card-title">Lorem Ipsum Dolor</h3>
              <p className="card-text">
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
