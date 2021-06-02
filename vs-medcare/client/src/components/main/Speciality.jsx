import React from "react";
import SplCard from "./SplCard";

const Speciality = () => {
  return (
    <>
      <section id="services" className="services mt-5 mb-3 py-3">
        <div className="container">
          <div className="section-title text-center">
            <h2>Multispeciality Hospital</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur quam optio esse earum voluptatibus repellat?
            </p>
          </div>
          <div className="row">
            <SplCard />
            <SplCard />
            <SplCard />
            <SplCard />
            <SplCard />
            <SplCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Speciality;
