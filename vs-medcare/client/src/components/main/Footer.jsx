import React from "react";
import { Link } from "react-router-dom";
import Copy from "./Copy";
import FooterIcon from "./FooterIcon";
import Term from "./Term";

const Footer = () => {
  return (
    <>
      <footer className="footer py-4 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <Copy />
            <FooterIcon />
            <Term />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
