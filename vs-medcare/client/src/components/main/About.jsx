import React from "react";
import AboutDetail from "./AboutDetail";
import AboutImg from "./AboutImg";

const About = () => {
  return (
    <>
      <div id="about">
        <section className="about-section clearfix py-5">
          <div className="container">
            <div className="about">
              <AboutImg />
              <AboutDetail />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
