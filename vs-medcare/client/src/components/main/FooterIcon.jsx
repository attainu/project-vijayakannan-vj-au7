import React from "react";
import { Link } from "react-router-dom";

const FooterIcon = () => {
  return (
    <>
      <div className="col-lg-4 my-3 my-lg-0">
        <Link className="btn btn-back btn-social mx-2" href="#!">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link className="btn btn-back btn-social mx-2" href="#!">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link className="btn btn-back btn-social mx-2" href="#!">
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </div>
    </>
  );
};

export default FooterIcon;
