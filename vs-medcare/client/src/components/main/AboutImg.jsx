import React from "react";
import Aboutimg from "../../images/about.jpg";

const AboutImg = () => {
  return (
    <>
      <img
        className="about-img img-fluid mb-3 mb-lg-0 rounded"
        src={Aboutimg}
        alt="about-img"
      />
    </>
  );
};

export default AboutImg;
