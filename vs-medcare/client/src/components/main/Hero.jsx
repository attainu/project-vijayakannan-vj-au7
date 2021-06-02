import React from "react";
import HeroBtn from "./HeroBtn";

const Hero = () => {
  return (
    <div id="home">
      <section id="hero" className="d-flex align-items-center">
        <div className="container text-center position-relative">
          <h1>24/7 Care is available</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            deleniti.
          </h2>
          <HeroBtn />
        </div>
      </section>
    </div>
  );
};

export default Hero;
