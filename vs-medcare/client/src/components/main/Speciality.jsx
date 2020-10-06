import React from "react";
import SplCard from "./SplCard";

const Speciality = () => {
  return (
    <>
      <section id="services" class="services mt-5 mb-3 py-3">
        <div class="container">
          <div class="section-title text-center">
            <h2>Multispeciality Hospital</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur quam optio esse earum voluptatibus repellat?
            </p>
          </div>
          <div class="row">
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
