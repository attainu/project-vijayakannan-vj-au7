import React from "react";
import { Link } from "react-router-dom";

const AboutDetail = () => {
  return (
    <>
      <div className="about-text left-0 text-center bg-faded p-5 rounded">
        <h2 className="about-heading mb-4">
          <span className="about-heading-upper">Welcome</span>
          <span className="about-heading-lower">To Our Hospital</span>
        </h2>
        <p className="mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quod
          laboriosam eligendi, repellendus cumque ducimus minus libero autem
          sint sed deserunt qui ullam porro quasi dignissimos. Pariatur commodi
          hic in! autem sint sed deserunt
        </p>
        <div className="about-button mx-auto">
          <Link className="btn btn-color btn-lg" to="#">
            Know More
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutDetail;
