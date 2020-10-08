import React from "react";
import MedCard from "./MedCard";
import MedTitle from "./MedTitle";

const MedCamp = () => {
  return (
    <>
      <section className="camp">
        <MedTitle />
        <div className="camp-grid">
          <div className="row">
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
            <MedCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default MedCamp;
